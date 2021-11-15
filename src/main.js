import { createApp } from "vue";
import VueClickAway from "vue3-click-away";
// import  from 'element-plus'
import "element-plus/dist/index.css";
import { ElNotification, ElementPlus } from "element-plus";
import mixins from "./mixins";
// import fullname from './mixins/fullname';
import App from "./App.vue";
import "nprogress/nprogress.css";
import WideBtn from "@/components/reusables_/WideBtn.vue";
import ProfilePic from "@/components/reusables_/ProfilePic.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

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
app.mixin(mixins).use(ElementPlus).use(VueClickAway).use(store).use(router).mount("#app");
