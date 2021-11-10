<template>
  <div class="form_page">
    <div class="form_box">
      <div id="logo" class="my-4">
        <div class="desktop_logo">
          <img src="@/assets/img/mobile_logo.svg" />
        </div>
        <!-- <div class="mobile_logo">
                    <img src="@/assets/img/mobile_logo.svg" />
                </div> -->
      </div>
      <div class="head_text my-2">
        <p class="font-bold text-2xl">Log In to Your Account</p>
      </div>
      <div class="my-4">
        <form @submit.prevent="submit">
          <div class="input_box">
            <label class="input_label">Your Phone or Email</label>
            <input
              :class="{ invalid_input: v$.user.email.$errors.length }"
              class="form_input"
              v-model="user.email"
              @blur="v$.user.email.$touch"
              type="email"
              name="email"
              required
            />
            <div class="error_box" v-if="v$.user.email.$errors.length">
              <span class="items-center flex flex-shrink-0 text-red-500">
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p>Enter a valid phone or email.</p>
              </span>
            </div>
          </div>
          <div class="input_box">
            <label class="input_label">Your Password</label>
            <input
              :class="{ invalid_input: v$.user.password.$errors.length }"
              class="form_input"
              type="password"
              v-model="user.password"
              @blur="v$.user.password.$touch"
              required
            />
            <div class="error_box" v-if="v$.user.password.$errors.length">
              <span class="items-center flex flex-shrink-0 text-red-500">
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p>Please Enter A Valid Password.</p>
              </span>
            </div>
          </div>
          <button
            class="
              button_box
              bg-black
              px-4
              py-2
              my-2
              hover:pr-4
              cursor-pointer
              rounded
              w-full
              flex flex-row
              justify-between
              items-center
              input_box
            "
          >
            <p class="text-white text-lg font-medium">Log in</p>
            <svg
              class="swipe"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <hr class="my-4" />
          <p>
            New on loaner?
            <span class="text-blue-600 px-2 hover:underline hover:text-black">
              <router-link to="/createaccount">Create an account</router-link>
            </span>
          </p>
        </form>
      </div>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { mapActions } from "vuex";
// import axios from "axios";
import User from "../models/user";

export default {
  name: "SignIn",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      user: new User("", ""),
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    async submit() {
      // eslint-disable-next-line no-underscore-dangle
      //  const _this = this;
      const result = await this.v$.$validate();

      if (!result) {
        // notify user form is invalid
        return;
      }
      this.login(this.user).then(() => {
        this.$router.push({ name: "Verify" });
      });
    },
  },
  validations() {
    return {
      user: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(6),
        },
      },
    };
  },
};
</script>
