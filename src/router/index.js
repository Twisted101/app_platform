import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "index"
    },
    {
      path: "/index",
      name: "index",
      component: resolve => require(["@/components/RtIndex"], resolve)
    },
    {
      path: "/accountRegsiter/:id",
      name: "accountRegsiter",
      component: resolve => require(["@/components/AccountRegsiter"], resolve)
    },
    {
      path: "/createApp",
      name: "createApp",
      component: resolve => require(["@/components/CreateApp"], resolve)
    }
  ]
});
