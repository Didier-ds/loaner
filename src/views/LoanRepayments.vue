<script>
import {useRoute} from 'vue-router'
// import {useStore} from 'vuex'
import {ref} from 'vue'
import {ElMessage} from 'element-plus'
import RepayLoanForm from '@/components/reusables_/RepayLoanForm.vue'
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
            fetchRepayments,
            repayments,
            isRequest,
            toggleModal,
        }
    },
    components: {
        RepayLoanForm
    }
}
</script>

<template>
    <div>
            <div class="text-center my-2">
      <p class="font-medium">Total Left to Balance</p>
      <p class="text-3xl font-extrabold ibm">${{formatCurrency(0)}}</p>
    </div>
    <div class="float-right">
      <button @click="toggleModal" class="flex items-center p-2 border inline-block rounded">
        <img src="@/assets/img/add_btn.png" class="w-10" /><span class="px-2">Repay Loan</span>
      </button>
    </div>
    <transition name="fade">
        <RepayLoanForm @toggleModal="toggleModal" v-if="isRequest" />
    </transition>
        </div>

</template>