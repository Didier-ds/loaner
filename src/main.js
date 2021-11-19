import { createApp } from "vue";
import VueClickAway from "vue3-click-away";
// import  from 'element-plus'
import "element-plus/dist/index.css";
import { ElNotification, ElementPlus, ElScrollbar } from "element-plus";
import Flutterwave from "flutterwave-vue-v3";
import mixins from "./mixins";
// import fullname from './mixins/fullname';
import App from "./App.vue";
import "nprogress/nprogress.css";
import WideBtn from "@/components/reusables_/WideBtn.vue";
import ProfilePic from "@/components/reusables_/ProfilePic.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import refresh from '@/services/refresh'

refresh()
require("@/store/subscriber");

const app = createApp(App);
app.config.globalProperties.$notify = ElNotification;
app.component("WideBtn", WideBtn);
app.component("ProfilePic", ProfilePic);
app.directive("error", {
  beforeMount: (el) => {
    const ele = el;
    ele.style.color = "red";
    ele.style.fontSize = `${12}px`;
  },
});
app
  .mixin(mixins)
  .use(Flutterwave, { publicKey: "FLWPUBK_TEST-db5bc2dc21efad5023ae7b13aa04cd2e-X" })
  .use(ElementPlus)
  .use(ElScrollbar)
  .use(VueClickAway)
  .use(store)
  .use(router)
  .mount("#app");
