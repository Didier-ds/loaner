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
                v-model="form.firstname"
                :placeholder="user.firstname"
                type="firstname"
                name="firstname"
              />
            </div>
            <div class="input_box">
              <label class="input_label">lastname</label>
              <input
                class="form_input"
                v-model="form.lastname"
                :placeholder="user.lastname"
                type="lastname"
                name="lastname"
              />
            </div>
          </div>
          <div class="input_box">
            <label class="input_label">Email</label>
            <input
              class="form_input"
              :placeholder="user.email"
              v-model="form.email"
              type="email"
              name="email"
            />
          </div>
          <div class="input_box">
            <label class="input_label">Phone</label>
            <input
              class="form_input"
              v-model="form.phone"
              :placeholder="user.phone"
              type="tel"
              name="phone"
            />
          </div>
          <div class="flex flex-col sm:grid gap-4 grid-cols-2">
            <div class="input_box">
              <label class="input_label">account Number</label>
              <input
                class="form_input"
                v-model="form.account_no"
                :placeholder="user.account_no"
                type="tel"
                name="account_number"
              />
            </div>
            <div class="input_box">
              <label class="input_label">bank Name</label>
              <input
                class="form_input"
                v-model="form.bank_name"
                :placeholder="user.bank_name"
                type="text"
                name="bank_name"
              />
            </div>
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
import { computed, ref, reactive } from "vue";
// import {} from 'vuex'
import { useStore } from "vuex";
import { ElNotification } from "element-plus";
import User from "../models/user";



export default {
  name: "Profile",
  setup() {
    const isSpin = ref(false)
    const errMessage = ref('')
    const store = useStore()
    const id = computed(() => store.getters['auth/userId'])
    const form = reactive(new User("", "", "", "", "", ""))
    
    return {
      id,
      form,
      isSpin,
      submit: async () => {
       isSpin.value = true;
       
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(
              store.dispatch('auth/updateProfile', form).then(() => {
                isSpin.value= false;
                store.dispatch("auth/refresh").then(() => {
                  ElNotification({
                    title: "Profile Updated",
                    type: "success",
                    message: "",
                  })
                })
              }).catch(() => {
                  isSpin.value = false;
              })
            );
          }, 2000)
        );

      
    },
      errMessage,
      user: computed(() => store.getters["auth/user"]),
    };
  },
  methods: {
    
    // async submit() {
     
    //   this.isSpin = true;
    //     await new Promise((resolve) =>
    //       setTimeout(() => {
    //         resolve(
    //           // const id = store.getters['auth/userId']
    //         );
    //       }, 2000)
    //     );

    //   this.isSpin = false;
    // },
  },
};
</script>
