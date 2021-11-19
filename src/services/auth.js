// import axios from "axios"
import authHeader from "./auth_header";
import apiClient from "./apiClient";


export default {
  login(data) {
    return apiClient().post("/login", data);
  },
  register(data) {
    return apiClient().post("/register", data);
  },
  otp(otp) {
    const data = { otp: +otp };
    // console.log(otp);
    return apiClient().post("/complete-login", data, { headers: authHeader() });
  },
  refresh() {
    return apiClient().get("/user/refresh", { headers: authHeader() });
  },
   updateProfile(data, id){
    //  console.log(id)
     return apiClient().patch(`/update-profile/${id}`, data, { headers: authHeader() })
   }
};
