<template>
  <div class="form_page">
    <ProfilePic :name="fullname" :isSize="'mid'" />
    <p class="text-xl my-2 font-medium">{{ fullname }}</p>
    <div class="profile_container">
      <div class="">
        <form @submit.prevent="submit()">
          <div class="grid gap-4 grid-cols-2">
            <div class="input_box">
              <label class="input_label">firstname</label>
              <input
                class="form_input"
                :placeholder="form.firstname"
                type="firstname"
                name="firstname"
              />
            </div>
            <div class="input_box">
              <label class="input_label">lastname</label>
              <input
                class="form_input"
                :placeholder="form.lastname"
                type="lastname"
                name="lastname"
              />
            </div>
          </div>
          <div class="input_box">
            <label class="input_label">Email</label>
            <input class="form_input" :placeholder="form.email" type="email" name="email" />
          </div>
          <div class="input_box">
            <label class="input_label">Phone</label>
            <input class="form_input" :placeholder="form.phone" type="phone" name="phone" />
          </div>
          <!-- <div class="input_box">
            <label class="input_label">Password</label>
            <input
              class="form_input"
              type="password"
              :placeholder="form.password"
            />
              <span
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
          </div> -->
          <WideBtn :isSpin="isSpin">Update</WideBtn>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
// import {} from 'vuex'
import { mapActions, useStore } from "vuex";

export default {
  name: "Profile",
  setup() {
    const store = useStore();
    return {
      user: computed(() => store.getters["auth/user"]),
    };
  },
  data() {
    return {
      isSpin: false,
      form: this.user,
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
};
</script>
