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
          // console.log(res);
          return Promise.resolve(res);
        },
        (error) => Promise.reject(error)
      );
    },
    purchaseStock({dispatch}, data){
      const id = this.state.auth.user.user_id
        return assets.purchaseStock(data, id).then((res) => {
          // console.log(res)
            dispatch('refresh')
            return Promise.resolve(res);
          },
          (error) => 
            // console.log(error) 
             Promise.reject(error)
          
        )
    }
  },
  modules: {}
};
