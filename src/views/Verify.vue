<template>
  <div>
    <div class="overlay">
      <div class="bg-white modal rounded">
        <div>
          <p class="font-medium text-xl">Verify Your OTP</p>
          <p>To continue, please enter the verification code we've just sent you</p>
        </div>

        <div>
          <p v-error>{{ errMessage }}</p>
          <form @submit.prevent="submit" class="flex flex-col justify-center items-center">
            <div class="flex items-center flex-wrap justify-center my-2">
              <input
                type="tel"
                v-model="data.num1"
                ref="first"
                @keyup="next('first', 'second')"
                maxlength="1"
                class="border"
              />
              <input
                type="tel"
                v-model="data.num2"
                ref="second"
                @keyup="next('second', 'third')"
                maxlength="1"
                class="border"
              />
              <input
                type="tel"
                v-model="data.num3"
                ref="third"
                @keyup="next('third', 'fourth')"
                maxlength="1"
                class="border"
              />
              <input
                type="tel"
                v-model="data.num4"
                ref="fourth"
                @keyup="next('fourth', 'fifth')"
                maxlength="1"
                class="border"
              />
              <input
                type="tel"
                v-model="data.num5"
                ref="fifth"
                @keyup="next('fifth', 'sixth')"
                maxlength="1"
                class="border"
              />
              <input type="tel" v-model="data.num6" ref="sixth" maxlength="1" class="border" />
            </div>
            <button
              type="submit"
              class="bg-black rounded flex items-center px-4 py-2 text-white font-medium"
            >
              <BtnSpinner v-if="isSpin" /><span class="px-2">Verify</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { mapActions } from "vuex";
import BtnSpinner from "@/components/reusables_/BtnSpinner.vue";
// import { focusNextInput } from "@/utils";

export default {
  name: "Verify",
  setup() {
    const inputs = reactive({
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
      sixth: "",
    });
    const { first, second, third, fourth, fifth, sixth } = toRefs(inputs);
    const next = (from, to) => {
      // console.log(inputs[from].value);
      if (inputs[from].value.length) {
        inputs[to].focus();
      }
    };

    return { first, second, third, fourth, fifth, sixth, next };
  },
  components: {
    BtnSpinner,
  },
  data() {
    return {
      isSpin: false,
      errMessage: "",
      data: {
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
      },
    };
  },
  methods: {
    ...mapActions({
      verify: "auth/verify",
    }),
    async submit() {
      const { num1, num2, num3, num4, num5, num6 } = this.data;
      const otp = num1 + num2 + num3 + num4 + num5 + num6;
      this.isSpin = true;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            this.verify(otp)
              .then(() => {
                this.$router.push({ path: "/" });
              })
              .catch((err) => {
                this.errMessage = err.response.data.message;
              })
          );
        }, 1000)
      );
      this.isSpin = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  max-width: 600px;
  width: 90%;
  padding: 2em;
  background-color: white;
}
input {
  max-width: 50px;
  height: 50px;
  border-radius: 0.25em;
  margin: 0.25em;
  font-size: 1.3em;
  text-align: center;
}
</style>
