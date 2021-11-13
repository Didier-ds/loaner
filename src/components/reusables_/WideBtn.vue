<template>
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
    <p class="text-white text-lg font-medium"><slot></slot></p>
    <BtnSpinner v-if="isSpin" />
    <div v-else>
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
    </div>
  </button>
</template>
<script>
import BtnSpinner from "./BtnSpinner.vue";

export default {
  name: "Button",
  props: {
    isSpin: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BtnSpinner,
  },
};
</script>
