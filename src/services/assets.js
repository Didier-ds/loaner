import authHeader from "./auth_header";
import apiClient from "./apiClient";

export default {
  getAllMarketStocks() {
    return apiClient().get("/show-market", { headers: authHeader() });
  },
  fundWallet(data) {
    return apiClient().post("/fund-wallet", data, { headers: authHeader() });
  },
  completeFunding(data, token) {
    return apiClient().patch("/complete-funding", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  purchaseStock(data, id){
    return apiClient().post(`/buy-stock/${id}`, data, { headers: authHeader() })
  },
  getAllLoans(){
    return apiClient().get('/loans', { headers: authHeader() })
  },
  requestLoan(data){
    return apiClient().post(`/loan/request`, data, { headers: authHeader() })
  },
  fetchRepayments(loanId){
    return apiClient().get(`/payment/${loanId}`, { headers: authHeader() })
  }
};
