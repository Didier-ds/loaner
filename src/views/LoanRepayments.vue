<script>
import {useRoute} from 'vue-router'
// import {useStore} from 'vuex'
import {ref, computed} from 'vue'
import {ElMessage} from 'element-plus'
import RepayLoanForm from '@/components/reusables_/RepayLoanForm.vue'
import PaymentCard from '@/components/reusables_/PaymentCard.vue'
import assets from '@/services/assets'

export default {
    name: 'LoanRepayments',
    setup(){
        const repayments = ref([])
        // const store = useStore()
        const route = useRoute()
         const isRequest = ref(false);
    const toggleModal = () => {
      isRequest.value = !isRequest.value;
    };
        const {id} = route.params
        const fetchRepayments = async () => {
           await assets.fetchRepayments(id).then((res) => {
                repayments.value = res.data.data
            }).catch((err) => {
                ElMessage({
                     showClose: true,
                  message: err.response.data.message,
                  type: "warning",
                  duration: 5000
                })
            })
        } 
        fetchRepayments()
        return {
            id,
            fetchRepayments,
            repayments,
            total: computed(() => repayments.value.reduce((a,b) => a + +b.payment, 0)),
            isRequest,
            toggleModal,
        }
    },
    components: {
        RepayLoanForm,
        PaymentCard
    }
}
</script>

<template>
    <div>
            <div class="text-center my-2">
      <p class="font-medium">Total Amount Paid</p>
      <p class="text-3xl font-extrabold ibm">${{formatCurrency(total)}}</p>
    </div>
    <div class="float-right">
      <button @click="toggleModal" class="flex items-center p-2 border inline-block rounded">
        <img src="@/assets/img/add_btn.png" class="w-10" /><span class="px-2">Repay Loan</span>
      </button>
    </div>
    <div class="stocks_list clear-right">
      <p class="p-2 font-bold">Repayments:</p>
            <template v-if="repayments.length <= 0">
        <Empty>You have not made any payments</Empty>
      </template>
      <template v-else>
        <PaymentCard v-for="(payment, index) in repayments" :payment = "payment" :key="index" :index="index" />
      </template>
      
    </div>
    <transition name="fade">
        <RepayLoanForm @toggleModal="toggleModal" @fetchRepayments = "fetchRepayments" :loanId="id" v-if="isRequest" />
    </transition>
        </div>

</template>