import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./auth";
import assets from "./assets";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    assets,
  },
  plugins: [createPersistedState()]
});
