// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import LazyLoadDirective from "./directives/LazyLoadDirective";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://newsapi.org/v2/top-headlines";

Vue.directive("lazyload", LazyLoadDirective);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
