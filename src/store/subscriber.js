// import auth from "../services/auth";
import store from "@/store";

store.subscribe((mutation) => {
  switch (mutation.type) {
    case "auth/SET_TOKEN":
      console.log(`hi ${mutation.payload}`);
      if (mutation.payload) {
        // console.log(mutation.payload);

        const data = mutation.payload;
        const myJson = JSON.stringify(data);
        localStorage.setItem("token", myJson);
      } else {
        //   axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload.token}`;
        localStorage.removeItem("token");
      }

      break;

    default:
      break;
  }
});
