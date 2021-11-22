<template>
  <div>
    <div class="text-center my-2">
      <p class="font-medium">Wallet Balance</p>
      <p class="text-3xl font-extrabold ibm">${{formatCurrency(balance)}}</p>
    </div>
    <div class="float-right">
      <button @click="toggleModal" class="flex items-center p-2 border inline-block rounded">
        <img src="@/assets/img/add_btn.png" class="w-10" /><span class="px-2">Request Loan</span>
      </button>
    </div>
    <div class="stocks_list clear-right">
      <p class="p-2 font-bold">Transactions:</p>
            <template v-if="loans.length <= 0">
        <Empty>You have no loans</Empty>
      </template>
      <template v-else>
        <LoanCard v-for="(loan, index) in loans" :loan = "loan" :key="index" :index="index" />
      </template>
      
    </div>

    <LoanFormModal @toggleModal="toggleModal" v-if="isRequest" />
  </div>
</template>
<script>
import { ref, computed } from "vue";
import {useStore} from 'vuex';
import LoanCard from "@/components/reusables_/LoanCard.vue";
import LoanFormModal from "@/components/reusables_/LoanFormModal.vue";

// getAllLoans()

export default {
  name: "Loan",
  setup() {
    const store = useStore()
    const isRequest = ref(false);
    const toggleModal = () => {
      isRequest.value = !isRequest.value;
    };
    const  getAllLoans = () => {
      store.dispatch('assets/getAllLoans')
    }
    getAllLoans()
    return {
      getAllLoans,
      balance: computed(() => store.getters["auth/walletBalance"]),
      loans: computed(() => store.getters['assets/loans']),
      isRequest,
      toggleModal,
    };
  },
  components: {
    LoanCard,
    LoanFormModal,
  },
};
</script>
