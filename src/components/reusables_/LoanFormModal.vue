<template>
  <div class="overlay">
    <div class="modal fadeUp rounded relative" v-click-away="close">
      <div @click="close" class="absolute right-0 top-0 m-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6L18 18"
            stroke="#111827"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p>Request A Loan</p>
      <!-- <div class="flex overflow-x-auto">
        <div
          :class="'active'"
          class="
            price_card
            w-full
            text-center
            border
            hover:bg-black hover:text-white
            cursor-pointer
            py-2
            border-2
            rounded-md
          "
        >
          <p class="font-medium text-lg">2% Interest Rate</p>
          <p>6 Months</p>
        </div>
        <div
          class="
            price_card
            w-full
            text-center
            border
            hover:bg-black hover:text-white
            cursor-pointer
            py-2
            border-2
            rounded-md
          "
        >
          <p class="font-medium text-lg">2% Interest Rate</p>
          <p>6 Months</p>
        </div>
        <div
          class="
            price_card
            w-full
            text-center
            border
            hover:bg-black hover:text-white
            cursor-pointer
            py-2
            border-2
            rounded-md
          "
        >
          <p class="font-medium text-lg">2% Interest Rate</p>
          <p>6 Months</p>
        </div>
      </div> -->
      <div class="my-4">
        <p class="font-medium">Amount</p>
        <input type="text" class="border p-2 rounded w-full outline-none" />
      </div>
       <div class="my-4 relative">
        <p class="font-medium">Period</p>
        <div class="border p-2 rounded w-full  outline-none" >Choose Your Package</div>
      <div class="border h-32 bg-white my-2 w-full absolute overflow-y-scroll rounded p-2">
         <p v-for="(list, index) in packages" class="p-2 hover:bg-gray-600 rounded select-none hover:cursor-default hover:text-white font-medium" :key="index">{{list.name}}</p> 
      </div>
      </div>
      <div>
        <p class="font-medium">Payment Plan:</p>
        <p class="ibm font-bold">${{ formatCurrency(25000) }}</p>
      </div>
      <div class="float-right">
        <button class="bg-black rounded text-white font-medium p-2 px-4">Request Loan</button>
      </div>
    </div>
  </div>
</template>
<script>
import {reactive} from 'vue'
import packages from '@/utils/packages'

export default {
  name: "LoanFormModal",
  setup(){
    const selectedMonth = reactive({
      name: 'Choose Your Package',
      value: 0
    })
   
    return {
      packages,
      selectedMonth
    }
  },
  methods: {
    close() {
      this.$emit("toggleModal");
    },
  },
};
</script>
<style lang="scss">
.modal {
  max-width: 600px;
  width: 90%;
  padding: 2em;
  background-color: white;
}
.price_card {
  transition: 0.35s ease-in-out;
  min-width: 15em;
  margin-right: 1em;
}
.price_card.active {
  background-color: #0c1825;
  color: white;
}
</style>
