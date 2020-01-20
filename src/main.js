import Vue from "vue";
import ElementUi from "element-ui";
import Locale from "element-ui/lib/locale/lang/en";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(ElementUi, {Locale});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
