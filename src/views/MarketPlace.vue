<template>
  <div>
    <div class="text-center my-2">
      <p class="font-medium">Wallet Balance</p>
      <p class="text-3xl font-extrabold ibm">&#8358;{{formatCurrency(balance)}}</p>
    </div>
    <div class="stocks_list clear-right">
      <p class="p-2 font-bold">Stocks:</p>
      <stock-card
        v-for="(stock, index) in MarketPlace"
        :key="index"
        :stock="stock"
        :index="index"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, useStore } from "vuex";
import {computed} from 'vue'
import StockCard from "@/components/reusables_/StockCard.vue";

export default {
  name: "MarketPlace",
  components: {
    StockCard,
  },
  setup(){
    const store = useStore()
    return {
      balance: computed(() => store.getters["auth/walletBalance"]),
    }
  },
  methods: {
    ...mapActions({
      getAllMarketStocks: "assets/getAllMarketStocks",
    }),
    fetch() {
      this.getAllMarketStocks();
    },
  },
  computed: {
    ...mapGetters({
      MarketPlace: "assets/marketplace",
    }),
  },
  mounted() {
    this.fetch();
  },
};
</script>
