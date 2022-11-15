import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import jquery from "jquery";

Vue.config.productionTip = false;
Vue.use(Antd);

Vue.prototype.$ = jquery;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
