export default {
  computed: {
    fullname() {
      return this.$store.getters["auth/fullname"];
    },
  },
  methods: {
    formatCurrency(value) {
      const val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
