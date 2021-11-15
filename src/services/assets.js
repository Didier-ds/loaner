import authHeader from "./auth_header";
import apiClient from "./apiClient";

export default {
  getAllMarketStocks() {
    return apiClient().get("/show-market", { headers: authHeader() });
  },
};
