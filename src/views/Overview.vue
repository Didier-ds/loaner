<template>
  <div>
    <div class="card_box flex flex-col my-4 sm:grid grid-cols-2 gap-4">
      <div class="portfolio_card relative p-2 flex flex-col justify-between">
        <div>
          <p class="title pl-2">Portfolio Value:</p>
          <p class="value text-3xl font-bold text-center">${{ formatCurrency(total) }}</p>
        </div>
        <div>
          <p class="title pl-2">Available Balance:</p>
          <p class="value text-3xl font-bold text-center">${{ formatCurrency(balance) }}</p>
        </div>
      </div>
      <div class="little_card_box grid grid-cols-2 gap-4">
        <CardBtn :text="'Apply For A New Loan'" :img="'arrow'" :route="'Loan'" />
        <CardBtn :text="'Click to Buy Stocks'" :img="'add'" :route="'MarketPlace'" />
      </div>
    </div>
    <div class="stocks_list">
      <p class="p-2 font-bold">Portfolio Activities:</p>
      <template v-if="portfolios.length <= 0">
        <Empty />
      </template>
      <template v-else>
        <UserStockCard
          v-for="(stock, index) in portfolios"
          :key="index"
          :stock="stock"
          :index="index"
        />
      </template>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";

import Empty from "@/components/reusables_/Empty.vue";
import UserStockCard from "@/components/reusables_/UserStockCard.vue";
import CardBtn from "@/components/reusables_/CardBtn.vue";

export default {
  name: "Overview",
  setup() {
    const store = useStore();
    return {
      portfolios: computed(() => store.getters["auth/portfolios"]),
      total: computed(() => {
        const all = store.getters["auth/portfolios"];
        if (all.length <= 0) return 0;

        return all.reduce((a, b) => +a.unit_price + +b.unit_price);
      }),
      balance: computed(() => store.getters["auth/walletBalance"]),
    };
  },
  components: {
    UserStockCard,
    CardBtn,
    Empty,
  },
  mounted() {},
};
</script>
