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
      <div v-if="isSuccess" class="flex flex-col justify-center items-center">
        <div class="mx-auto">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.4464 55.387C38.8192 53.7599 36.181 53.7599 34.5538 55.387C32.9266 57.0141 32.9266 59.6524 34.5538 61.2795L40.4464 55.387ZM45.8334 66.6666L42.8872 69.6128C44.5142 71.2399 47.1526 71.2399 48.7797 69.6128L45.8334 66.6666ZM65.4463 52.9462C67.0734 51.3191 67.0734 48.6808 65.4463 47.0537C63.8192 45.4266 61.1809 45.4266 59.5538 47.0537L65.4463 52.9462ZM75.0001 29.1666V79.1666H83.3334V29.1666H75.0001ZM70.8334 83.3333H29.1667V91.6666H70.8334V83.3333ZM25.0001 79.1666V29.1666H16.6667V79.1666H25.0001ZM29.1667 24.9999H37.5001V16.6666H29.1667V24.9999ZM62.5001 24.9999H70.8334V16.6666H62.5001V24.9999ZM29.1667 83.3333C26.8656 83.3333 25.0001 81.4678 25.0001 79.1666H16.6667C16.6667 86.0703 22.2632 91.6666 29.1667 91.6666V83.3333ZM75.0001 79.1666C75.0001 81.4678 73.1347 83.3333 70.8334 83.3333V91.6666C77.7372 91.6666 83.3334 86.0703 83.3334 79.1666H75.0001ZM83.3334 29.1666C83.3334 22.263 77.7372 16.6666 70.8334 16.6666V24.9999C73.1347 24.9999 75.0001 26.8654 75.0001 29.1666H83.3334ZM25.0001 29.1666C25.0001 26.8654 26.8656 24.9999 29.1667 24.9999V16.6666C22.2632 16.6666 16.6667 22.263 16.6667 29.1666H25.0001ZM34.5538 61.2795L42.8872 69.6128L48.7797 63.7203L40.4464 55.387L34.5538 61.2795ZM48.7797 69.6128L65.4463 52.9462L59.5538 47.0537L42.8872 63.7203L48.7797 69.6128ZM45.8334 16.6666H54.1667V8.33325H45.8334V16.6666ZM54.1667 24.9999H45.8334V33.3333H54.1667V24.9999ZM45.8334 24.9999C43.5322 24.9999 41.6667 23.1344 41.6667 20.8333H33.3334C33.3334 27.7368 38.9299 33.3333 45.8334 33.3333V24.9999ZM58.3334 20.8333C58.3334 23.1344 56.468 24.9999 54.1667 24.9999V33.3333C61.0705 33.3333 66.6667 27.7368 66.6667 20.8333H58.3334ZM54.1667 16.6666C56.468 16.6666 58.3334 18.5321 58.3334 20.8333H66.6667C66.6667 13.9297 61.0705 8.33325 54.1667 8.33325V16.6666ZM45.8334 8.33325C38.9299 8.33325 33.3334 13.9297 33.3334 20.8333H41.6667C41.6667 18.5321 43.5322 16.6666 45.8334 16.6666V8.33325Z"
              fill="#0C1825"
            />
          </svg>
        </div>
        <p class="text-center font-medium text-lg">Wallet Has Been Funded</p>
      </div>
      <div v-else>
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
  </div>
</template>
<script>
import BtnSpinner from "@/components/reusables_/BtnSpinner.vue";
import assets from "@/services/assets";

export default {
  name: "FundWalletForm",
  data() {
    return {
      isSuccess: false,
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
      this.isSuccess = false;
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
          .then(() => {
            this.$store
              .dispatch("auth/refresh")
              .then((resp) => {
                console.log(resp);
                this.$notify({
                  title: "Wallet Funded",
                  type: "success",
                  message: "",
                });
                this.isSuccess = true;
              })
              .catch((err) => console.log(err));
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
