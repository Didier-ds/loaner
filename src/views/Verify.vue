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
              <input type="tel" v-model="first" id="first" maxlength="1" class="border" />
              <input type="tel" v-model="second" id="second" maxlength="1" class="border" />
              <input type="tel" v-model="third" id="third" maxlength="1" class="border" />
              <input type="tel" v-model="fourth" id="fourth" maxlength="1" class="border" />
              <input type="tel" v-model="fifth" id="fifth" maxlength="1" class="border" />
              <input type="tel" v-model="sixth" id="sixth" maxlength="1" class="border" />
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
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { focusNextInput } from "@/utils";

export default {
  name: "Verify",
  setup() {
    const store = useStore();
    const router = useRouter();
    const values = reactive({
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
      sixth: "",
    });
    const { first, second, third, fourth, fifth, sixth } = toRefs(values);

    const submit = () => {
      const otp =
        values.first + values.second + values.third + values.fourth + values.fifth + values.sixth;
      store
        .dispatch("auth/verify", otp)
        .then(() => {
          router.push({ path: "/" });
        })
        .catch();
    };
    return { first, second, third, fourth, fifth, sixth, submit };
  },
  methods: {
    next(from, to) {
      focusNextInput(from, to);
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
