import { createRouter, createWebHashHistory } from "vue-router";
import Nprogress from "nprogress";
import Verify from "@/views/Verify.vue";
// import Home from "../views/Home.vue";
import Login from "../views/SignIn.vue";
import CreateAccount from "@/views/CreateAccount.vue";
import Overview from "@/views/Overview.vue";
import Loan from "@/views/Loan.vue";
import EmailVerify from "@/views/VerifyEmail.vue";
import LoanRepayments from '../views/LoanRepayments.vue'
import Profile from "@/views/Profile.vue";
import MarketPlace from "@/views/MarketPlace.vue";
import Dashboard from "@/layouts/Index.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "Overview",
        component: Overview,
      },
      {
        path: "/loan",
        name: "Loan",
        component: Loan,
      },
      {
        path: "/marketplace",
        name: "MarketPlace",
        component: MarketPlace,
      },
      {
        path: "/repayments/:id",
        name: "Loan-Repayments",
        component: LoanRepayments,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    children: [
      {
        path: "verify",
        name: "Verify",
        component: Verify,
      },
    ],
  },
  {
    path: "/createaccount",
    name: "CreateAccount",
    component: CreateAccount,
    children: [
      {
        path: "emailverification",
        name: "EmailVerify",
        component: EmailVerify,
      },
    ],
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
router.beforeEach((to, _from, next) => {
  Nprogress.start();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters["auth/isAuthenticated"]) {
      next("/login");
      return;
    }
    next();
  } else {
    next();
  }
});

router.afterEach(() => {
  Nprogress.done();
});
export default router;
