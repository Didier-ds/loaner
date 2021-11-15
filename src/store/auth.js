import auth from "@/services/auth";

export default {
  namespaced: true,
  state: {
    token: null,
    user: {
      user_id: "5",
      firstname: "James",
      lastname: "Tichdns",
      email: "gulephil44@gmail.com",
      created_at: "2021-11-15 00:52:42",
      bank_account: { account_no: "none", bank_name: "none" },
      otp: "838374",
      wallet: {
        amount: 0,
        address: "$2a$06$oF0geZjr/2X7s0xLnfaWL.HNA6PmCYIzoo4TpStB4X74psFHiRQG6",
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYW5rX2FjY291bnQiOnsiYWNjb3VudF9uYW1lIjoibm9uZSIsImFjY291bnRfbm8iOiJub25lIn0sImVtYWlsIjoiZ3VsZXBoaWw0NEBnbWFpbC5jb20iLCJleHAiOjE2MzY5ODAyMjcsImZpcnN0bmFtZSI6IkphbWVzIiwiaWQiOiI1IiwibGFzdG5hbWUiOiJUaWNoZG5zIiwib3RwIjo4MzgzNzQsInBvcnRmb2xpbyI6W3siaWQiOiI1Iiwic3ltYm9sIjoiQVdTIiwiaW1hZ2VfdXJsIjoiaHR0cHM6Ly9idXlzaGFyZXMuY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDcvU2NyZWVuc2hvdC0yMDIwLTA3LTA0LWF0LTE2LjQ5LjU1LnBuZyIsInF1YW50aXR5IjoiMTIwIiwidW5pdF9wcmljZSI6IjEyMDAiLCJlcXVpdHlfdmFsdWUiOiIxNDQwMDAiLCJwZXJjZW50YWdlX2NoYW5nZSI6Ii05In0seyJpZCI6IjE1Iiwic3ltYm9sIjoiVFNMQSIsImltYWdlX3VybCI6Imh0dHBzOi8vZy5mb29sY2RuLmNvbS9hcnQvY29tcGFueWxvZ29zL3NxdWFyZS90c2xhLnBuZyIsInF1YW50aXR5IjoiMjUiLCJ1bml0X3ByaWNlIjoiODAwIiwiZXF1aXR5X3ZhbHVlIjoiMjAwMDAiLCJwZXJjZW50YWdlX2NoYW5nZSI6Ii0xIn1dLCJ3YWxsZXQiOnsiYWRkcmVzcyI6IiQyYSQwNiRvRjBnZVpqci8yWDdzMHhMbmZhV0wuSE5BNlBtQ1lJem9vNFRwU3RCNFg3NHBzRkhpUlFHNiIsImFtb3VudCI6IjAuMDAwMDAwIn0sIndoZW4iOiIyMDIxLTExLTE1IDAwOjUyOjQyIn0.zlEmubFo-gKQg10B-ALcFT1EDbe-2tHR8DROYv2UtsA",
      portfolio: [
        {
          id: "5",
          symbol: "AWS",
          image_url:
            "https://buyshares.co.uk/wp-content/uploads/2020/07/Screenshot-2020-07-04-at-16.49.55.png",
          quantity: "120",
          unit_price: "1200",
          equity_value: "144000",
          percentage_change: "-9",
        },
        {
          id: "15",
          symbol: "TSLA",
          image_url: "https://g.foolcdn.com/art/companylogos/square/tsla.png",
          quantity: "25",
          unit_price: "800",
          equity_value: "20000",
          percentage_change: "-1",
        },
      ],
    },
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
  },
  modules: {},
};
