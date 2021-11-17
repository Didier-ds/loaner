<template>
  <div class="overlay">
    <div class="modal fadeUp rounded relative" v-click-away="close">
      <div @click="close" class="absolute right-0 top-0 m-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6L18 18"
            stroke="#111827"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="text-lg absolute left-0 top-0 m-4 font-medium my-2">Request Fund</p>
      <form class="mt-4" @submit.prevent="fund()">
        <div class="input_box mb-2">
          <label class="font-medium">Amount</label>
          <input
            v-model="data.amount"
            type="tel"
            class="form_input border p-2 rounded w-full outline-none"
          />
        </div>
        <div class="input_box mb-2">
          <label class="font-medium">Currency</label>
          <div class="border rounded p-2">{{ data.currency }}</div>
        </div>
        <div class="input_box mb-2">
          <label class="font-medium">Payment Option</label>
          <div class="border rounded p-2">{{ data.payment_option }}</div>
        </div>
        <button
          type="submit"
          class="bg-black rounded mx-auto flex items-center px-4 py-2 text-white font-medium"
        >
          <BtnSpinner v-if="isSpin" /><span class="px-2">Proceed</span>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import BtnSpinner from "@/components/reusables_/BtnSpinner.vue";
import assets from "@/services/assets";

export default {
  name: "FundWalletForm",
  data() {
    return {
      data: {
        amount: 0,
        payment_option: "card",
        currency: "NGN",
      },
      errMessage: "",
      isSpin: false,
      token: "",
      paymentDetails: null,
    };
  },
  methods: {
    close() {
      this.$emit("toggleForm", false);
    },
    update() {
      this.amt = this.formatCurrency(this.amt);
    },
    makePaymentCallback(response) {
      console.log("Payment callback", response);
      if (response.status === "successful") {
        const data = {
          tx_ref: this.paymentDetails.tx_ref,
          amount: this.paymentDetails.amount,
          wallet: this.paymentDetails.meta.consumer_mac,
        };
        assets
          .completeFunding(data, this.token)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      // Close modal in payment callback
      this.closePaymentModal();
    },
    closePaymentCallback() {
      console.log("payment modal is closed");
    },
    async fund() {
      this.isSpin = true;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            assets
              .fundWallet(this.data)
              .then((res) => {
                // this.close()
                console.log(res.data.data.payment_body);

                this.token = res.data.data.token;
                this.paymentDetails = res.data.data.payment_body;
                this.asyncPayWithFlutterwave(res.data.data.payment_body).then((response) => {
                  this.makePaymentCallback(response);
                });
              })
              .catch((err) => {
                console.log(err);
                this.errMessage = err.response.data.message;
              })
          );
        }, 1000)
      );
      this.isSpin = false;
    },
  },
  components: {
    BtnSpinner,
  },
};
</script>
