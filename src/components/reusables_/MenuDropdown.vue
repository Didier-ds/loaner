<template>
  <div v-click-away="close" class="menudropdown border rounded p-2 shadow bg-white w-full">
    <div>
      <p class="px-2 font-medium capitalize select-none">{{ fullname }}</p>
    </div>
    <div class="my-2">
      <ul class="">
        <li
          @click="toggleForm(true)"
          class="hover:bg-black-400 hover:text-white rounded cursor-pointer p-2 font-medium"
        >
          Fund My Wallet
        </li>
        <li
          @click="push('Profile')"
          class="hover:bg-black-400 hover:text-white rounded cursor-pointer p-2 font-medium"
        >
          Profile
        </li>

        <li class="hover:bg-black-400 hover:text-white rounded cursor-pointer p-2 font-medium">
          Logout
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuDropdown",
  setup() {
    return {};
  },

  methods: {
    close() {
      this.$emit("toggleModal");
    },
    toggleForm(any) {
      this.close();
      this.$emit("toggleForm", any);
    },
    push(any) {
      this.close();
      this.$router.push({ name: any });
    },
  },
};
</script>
<style lang="scss">
.menudropdown {
  max-width: 200px;
  position: absolute;
  top: 55px;
  right: 0;
  z-index: 2;
}
</style>
