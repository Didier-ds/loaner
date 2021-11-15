import assets from "@/services/assets";

export default {
  namespaced: true,
  state: {
    marketplace: {},
  },
  getters: {
    marketplace(state) {
      return state.marketplace;
    },
  },
  mutations: {
    AddMarketStocks(state, data) {
      state.marketplace = data;
    },
  },
  actions: {
    getAllMarketStocks({ commit }) {
      return assets.getAllMarketStocks().then(
        (res) => {
          commit("AddMarketStocks", res.data.data);
          console.log(res);
          return Promise.resolve(res);
        },
        (error) => Promise.reject(error)
      );
    },
  },
};
