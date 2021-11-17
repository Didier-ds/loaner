import authHeader from "./auth_header";
import apiClient from "./apiClient";

export default {
  getAllMarketStocks() {
    return apiClient().get("/show-market", { headers: authHeader() });
  },
  fundWallet(data) {
    return apiClient().post("/fund-wallet", data, { headers: authHeader() });
  },
};
