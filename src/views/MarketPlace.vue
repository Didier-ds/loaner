<template>
  <div>
    <div class="stocks_list clear-right">
      <p class="p-2 font-bold">Transactions:</p>
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
import { mapGetters, mapActions } from "vuex";
import StockCard from "@/components/reusables_/StockCard.vue";

export default {
  name: "MarketPlace",
  components: {
    StockCard,
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
