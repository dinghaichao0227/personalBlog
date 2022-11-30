import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// const VueRouterPush = router.prototype.push;
// router.prototype.push = function push(to) {
//   return VueRouterPush.call(this, to).catch((err) => err);
// };
export default router;
