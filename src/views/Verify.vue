<template>
  <div>
    <div class="overlay">
      <div class="bg-white modal rounded">
        <div>
          <p class="font-medium text-xl">Verify Your OTP</p>
          <p>To continue, please enter the verification code we've just sent you</p>
        </div>

        <div>
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
            <button type="submit" class="bg-black rounded px-4 py-2 text-white font-medium">
              Verify
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
      console.log(inputs[from].value);
      if (inputs[from].value.length) {
        inputs[to].focus();
      }
    };

    return { first, second, third, fourth, fifth, sixth, next };
  },
  data() {
    return {
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
    submit() {
      const { num1, num2, num3, num4, num5, num6 } = this.data;
      const otp = num1 + num2 + num3 + num4 + num5 + num6;
      this.verify(otp).then(() => {
        this.$router.push({ path: "/" });
      });
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
