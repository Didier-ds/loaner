import axios from "axios";
import authHeader from "./auth_header";

export default function apiClient() {
  const api = axios.create({
    baseURL: "https://be-ope.herokuapp.com",
    withCredentials: false,
    headers: authHeader(),
  });
  return api;
}
