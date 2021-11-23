<template>
  <div>
    <div
      :style="{ '--order': index }"
      id="stockcard"
      class="
        flex
        w-full
        mb-4
        flex-col
        items-start
        sm:flex-row
        justify-between
        sm:items-center
        border
        rounded
        p-2
        px-4
      "
    >
      <div class="stock_name_container my-2 flex-grow flex items-center">
        <div class="border p-2 w-12 rounded-3xl">
          <img :src="stock.image_url" class="w-full" />
        </div>
        <div class="mx-4 flex-grow">
          <p class="stock_abbr font-bold">{{ stock.symbol }}</p>
          <span :class="color" class="px-2 text-xs  font-medium">{{ stock.percentage_change }}</span>
        </div>
      </div>
      <div class="stock_details border-t sm:border-0 py-2 w-full my-2 grid grid-cols-3 gap-10">
        <div class="text-center">
          <p class="font-medium text-gray-500 text-xs">Quantity</p>
          <p>{{ stock.quantity }}</p>
        </div>
        <div class="text-center">
          <p class="font-medium text-gray-500 text-xs">Equity Value</p>
          <p>{{ stock.equity_value }}</p>
        </div>
        <div class="text-center">
          <p class="font-medium text-gray-500 text-xs">Unit Price</p>
          <p class="ibm font-bold">&#8358;{{ stock.unit_price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {computed} from 'vue'

export default {
  name: "UserStockCard",
  props: ["stock", "index"],
  setup(props){
    return {
      color: computed(() => {
        const sign = props.stock.percentage_change.charAt(0)
        let classes;
        switch(sign){
          case '-':
              classes = 'text-red-500';
              break;
          case '+':
              classes = 'text-green-500';
              break;
              default:
                classes = 'text-green-500'
        }
        return classes
      })
    }
  }
};
</script>
<style lang="scss" scoped>
#stockcard {
  box-shadow: 0px 0px 10px rgba(12, 24, 37, 0.05);

  animation-name: fadeUpOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.35s;
  animation-delay: calc(var(--order) * 200ms);
}
@keyframes fadeUpOpacity {
  20% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
