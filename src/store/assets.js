import assets from "@/services/assets";

export default {
  namespaced: true,
  state: {
    marketplace: [],
    loans: []
  },
  getters: {
    marketplace(state) {
      return state.marketplace;
    },
    loans(state) {
      return state.loans;
    },
  },
  mutations: {
    AddMarketStocks(state, data) {
      state.marketplace = data;
    },
    AddLoans(state, data){
      state.loans = data
    }
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
    },
    getAllLoans({commit}){
      return assets.getAllLoans().then(
        (res) => {
          commit("AddLoans", res.data.data);
          // console.log(res);
          return Promise.resolve(res);
        },
        (error) => Promise.reject(error)
      );
    },
    requestLoan({dispatch}, data){
      // const id = this.state.auth.user.user_id
        return assets.requestLoan(data).then((res) => {
          // console.log(res)
            dispatch('auth/refresh')
            return Promise.resolve(res);
          },
          (error) => 
            // console.log(error) 
             Promise.reject(error)
          
        )
    },
    // fetchRepayments(){
    //   const id = this.state.auth.user.user_id
    //     return assets.fetchRepayments(id).then((res) => {
    //       // console.log(res)
    //         // dispatch('refresh')
    //         return Promise.resolve(res);
    //       },
    //       (error) => 
    //         // console.log(error) 
    //          Promise.reject(error)
          
    //     )
    // },
  },
  modules: {}
};
