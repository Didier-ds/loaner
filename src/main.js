import { createApp } from "vue";
import VueClickAway from "vue3-click-away";
import formatCurrency from "./mixins/formatCurrency";
import App from "./App.vue";
import "nprogress/nprogress.css";
import WideBtn from "@/components/reusables_/WideBtn.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

require("@/store/subscriber");

const app = createApp(App);
app.component("WideBtn", WideBtn);
app.directive("error", {
  beforeMount: (el) => {
    const ele = el;
    ele.style.color = "red";
    ele.style.fontSize = `${12}px`;
  },
});
app.mixin(formatCurrency).use(VueClickAway).use(store).use(router).mount("#app");
