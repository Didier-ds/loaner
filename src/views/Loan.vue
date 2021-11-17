<template>
  <div>
    <div class="float-right">
      <button @click="toggleModal" class="flex items-center p-2 border inline-block rounded">
        <img src="@/assets/img/add_btn.png" class="w-10" /><span class="px-2">Request Loan</span>
      </button>
    </div>
    <div class="stocks_list clear-right">
      <p class="p-2 font-bold">Transactions:</p>
      <LoanCard v-for="index in 12" :key="index" :index="index" />
    </div>

    <LoanFormModal @toggleModal="toggleModal" v-if="isRequest" />
  </div>
</template>
<script>
import { ref } from "vue";
import LoanCard from "@/components/reusables_/LoanCard.vue";
import LoanFormModal from "@/components/reusables_/LoanFormModal.vue";

export default {
  name: "Loan",
  setup() {
    const isRequest = ref(false);
    const toggleModal = () => {
      isRequest.value = !isRequest.value;
    };
    return {
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
