<template>
  <div class="flex justify-center flex-col items-center my-12">
    <img src="@/assets/img/empty.svg" />
    <p class="m-2 text-xl font-bold text-gray-300"><slot></slot></p>
  </div>
</template>
<script>
export default {
  name: "Empty",
};
</script>
