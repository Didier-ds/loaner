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
        <input type="text" class="border p-2 rounded w-full outline-none" v-model="amount"/>
      </div>
      <div class="flex flex-col gap-6 sm:items-center my-4 sm:grid grid-cols-2">
        <div class="w-full relative">
        <p class="font-medium">Period</p>
        <div class="border p-2 rounded w-full  outline-none" @click="toggleDropdown()">{{selectedMonth.name}}</div>
        <transition name="fade">
        <PackageDropdown v-if="isShow" :packages="packages" @selectPackage = "selectPackage" @closeForm = "closeForm" />
        </transition>
      </div>
      <div>
        <p class="font-medium">Payment Plan:</p>
        <p class="ibm font-bold">${{ paymentSchedule }}</p>
      </div>
      </div>
      <div class="float-right">
        <button
            @click = submit()
            type="submit"
            class="bg-black rounded mx-auto flex items-center px-4 py-2 text-white font-medium"
          >
            <BtnSpinner v-if="isSpin" /><span class="px-2">Request Loan</span>
          </button>
        <!-- <button class="bg-black rounded text-white font-medium p-2 px-4">Request Loan</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import { ElNotification, ElMessage } from "element-plus";
import packages from '@/utils/packages'
import PackageDropdown from './PackageDropdown.vue'
import {GetPaymentSchedule} from '@/utils/'
import BtnSpinner from "@/components/reusables_/BtnSpinner.vue";
// import assets from '@/services/assets'

export default {
  name: "LoanFormModal",
  setup(props, context){
    const selectedMonth = ref({
      name: 'Choose Your Package',
      value: 1,
      rate: 1
    })
    const store = useStore()
    const amount = ref(0)
    const isShow = ref(false);
    function closeForm(any){
      isShow.value = any
    }
    const isSpin = ref(false)
    const toggleDropdown = () => {
      isShow.value = !isShow.value
    }
   const selectPackage = (any) => {
      selectedMonth.value = any
      
      toggleDropdown()
   }
   function close() {
      context.emit("toggleModal");
    }
    const submit = async () => {
      isSpin.value = true;
      const data = {
        amount: +amount.value,
        duration: selectedMonth.value.value
      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            store.dispatch('assets/requestLoan', data).then(() => {
              store.dispatch('assets/getAllLoans').then(() => {
                
                  close()
                ElNotification({
                  title: "Loan Requested",
                  type: "success",
                  message: "",
                });
                isSpin.value = false;
                close()
              }).catch((err) => {
                ElMessage({
                  showClose: true,
                  message: err.response.data.message,
                  type: "warning",
                  duration: 5000
                });
              })
                isSpin.value = false;
                // close()
              
            }).catch((err) => {
              isSpin.value = false;
              ElMessage({
                showClose: true,
                  message: err.response.data.message,
                  type: "warning",
                  duration: 5000
                  
                });
                // close()
            })
          );
        }, 1000)
      );
      isSpin.value = false;
    }
    return {
      submit,
      amount,
      toggleDropdown,
      isShow,
      isSpin,
      close,
      paymentSchedule: computed(() => {
        const {value, rate} = selectedMonth.value
        if (value <= 1) return 0
        return GetPaymentSchedule(amount.value, value, rate)
      }),
      closeForm,
      packages,
      selectedMonth,
      selectPackage
    }
  },
  methods: {
    
  },
  components: {
    BtnSpinner,
    PackageDropdown
  }
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
