import auth from "@/services/auth";
import { user } from "@/utils";

export default {
  namespaced: true,
  state: {
    token: null,
    user: user(),
  },
  getters: {
    fullname(state) {
      if (state.user) {
        const { firstname, lastname } = state.user;
        return `${firstname} ${lastname}`;
      }
      return "";
    },
    portfolios(state) {
      if (state.user) {
        return state.user.portfolio;
      }
      return [];
    },
    walletBalance(state) {
      if (state.user) {
        return state.user.wallet.amount;
      }
      return [];
    },
    isAuthenticated(state) {
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN(state, data) {
      state.token = data;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    login({ commit }, data) {
      return auth.login(data).then(
        (res) => {
          // console.log(res.data);
          commit("SET_TOKEN", res.data.data.token);
          return Promise.resolve(res);
        },
        (error) => Promise.reject(error)
      );

      // .then((res) => commit('SET_TOKEN',res.data.TokenString));
    },
    register(_, data) {
      auth.register(data).then();
    },
    verify({ commit }, data) {
      return auth.otp(data).then(
        (res) => {
          commit("SET_USER", res.data.data);
          return Promise.resolve(res);
        },
        (error) => Promise.reject(error)
      );
    },
    refresh({ commit }) {
      return auth.refresh().then(
        (res) => {
          commit("SET_USER", res.data.data);
          return Promise.resolve(res);
        },
        (err) => Promise.reject(err)
      );
    },
  },
  modules: {},
};
