// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// 有赞UI组件库
import "vant/lib/vant-css/index.css";
import {
  PullRefresh,
  Cell,
  List,
  NavBar,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem
} from "vant";
Vue.use(PullRefresh)
  .use(Cell)
  .use(List)
  .use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(Tabbar)
  .use(TabbarItem);

import defines from "./config";
Vue.prototype.defines = defines;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
