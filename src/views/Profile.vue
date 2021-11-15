<template>
  <div class="form_page">
    <ProfilePic :name="fullname" />
    <div class="profile_container">
      <div class="">
        <form @submit.prevent="submit()">
          <div class="grid gap-4 grid-cols-2">
            <div class="input_box">
              <label class="input_label">firstname</label>
              <input
                :class="{ invalid_input: v$.form.firstname.$errors.length }"
                class="form_input"
                v-model="form.firstname"
                @blur="v$.form.firstname.$touch"
                type="firstname"
                name="firstname"
              />
              <div class="error_box" v-if="v$.form.firstname.$errors.length">
                <span
                  v-for="(error, index) of v$.form.firstname.$errors"
                  :key="index"
                  class="items-center flex flex-shrink-0 text-red-500"
                >
                  <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p>{{ error.$message }}</p>
                </span>
              </div>
            </div>
            <div class="input_box">
              <label class="input_label">lastname</label>
              <input
                :class="{ invalid_input: v$.form.lastname.$errors.length }"
                class="form_input"
                v-model="form.lastname"
                @blur="v$.form.lastname.$touch"
                type="lastname"
                name="lastname"
              />
              <div class="error_box" v-if="v$.form.lastname.$errors.length">
                <span
                  v-for="(error, index) of v$.form.lastname.$errors"
                  :key="index"
                  class="items-center flex flex-shrink-0 text-red-500"
                >
                  <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p>{{ error.$message }}</p>
                </span>
              </div>
            </div>
          </div>
          <div class="input_box">
            <label class="input_label">Email</label>
            <input
              :class="{ invalid_input: v$.form.email.$errors.length }"
              class="form_input"
              v-model="form.email"
              @blur="v$.form.email.$touch"
              type="email"
              name="email"
            />
            <div class="error_box" v-if="v$.form.email.$errors.length">
              <span
                v-for="(error, index) of v$.form.email.$errors"
                :key="index"
                class="items-center flex flex-shrink-0 text-red-500"
              >
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p>{{ error.$message }}</p>
              </span>
            </div>
          </div>
          <div class="input_box">
            <label class="input_label">Phone</label>
            <input
              :class="{ invalid_input: v$.form.phone.$errors.length }"
              class="form_input"
              v-model="form.phone"
              @blur="v$.form.phone.$touch"
              type="phone"
              name="phone"
            />
            <div class="error_box" v-if="v$.form.phone.$errors.length">
              <span
                v-for="(error, index) of v$.form.phone.$errors"
                :key="index"
                class="items-center flex flex-shrink-0 text-red-500"
              >
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p>{{ error.$message }}</p>
              </span>
            </div>
          </div>
          <div class="input_box">
            <label class="input_label">Password</label>
            <input
              :class="{ invalid_input: v$.form.password.$errors.length }"
              class="form_input"
              type="password"
              v-model="form.password"
              @blur="v$.form.password.$touch"
            />
            <div class="error_box" v-if="v$.form.password.$errors.length">
              <span
                v-for="(error, index) of v$.form.password.$errors"
                :key="index"
                class="items-center flex flex-shrink-0 text-red-500"
              >
                <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p>{{ error.$message }}</p>
              </span>
            </div>
          </div>
          <WideBtn :isSpin="isSpin">Update</WideBtn>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, numeric, maxLength } from "@vuelidate/validators";
import { mapActions } from "vuex";
import { validName } from "@/utils";
import User from "../models/user";

export default {
  name: "Profile",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      isSpin: false,
      form: new User("", "", "", "", ""),
      errMessage: "",
    };
  },
  methods: {
    ...mapActions({
      register: "auth/register",
    }),
    async submit() {
      const result = await this.v$.$validate();
      // console.log(result);
      if (!result) {
        // notify user form is invalid
        return;
      }
      this.isSpin = true;
      //   await new Promise((resolve) =>
      //     setTimeout(() => {
      //       resolve(
      //         this.register(this.form)
      //           .then(() => {
      //             this.$router.push({ name: "EmailVerify" });
      //           })
      //           .catch((err) => {
      //             this.errMessage = err.response.data.message;
      //           })
      //       );
      //     }, 1000)
      //   );

      this.isSpin = false;
    },
  },
  validations() {
    return {
      form: {
        firstname: {
          required,
          name_validation: {
            $validator: validName,
            $message: "Invalid format.",
          },
        },
        lastname: {
          required,
          name_validation: {
            $validator: validName,
            $message: "Invalid format.",
          },
        },
        phone: { required, numeric, max: maxLength(11) },
        email: { required, email },
        password: { required, min: minLength(6) },
      },
    };
  },
};
</script>
