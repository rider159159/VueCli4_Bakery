import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import {
  ValidationObserver, ValidationProvider, configure, extend, localize,
} from 'vee-validate';
// 將驗證條件引入
import * as rules from 'vee-validate/dist/rules';
// 引入中文化的文件
import TW from 'vee-validate/dist/locale/zh_TW.json';
import store from './store';
import App from './App.vue';
import routes from './router'; // 自動找到資料夾中的 index.js 檔案
import './bus';// 載入 bus.js這個檔案
import currencyFilter from './filter/currency';
import dateFilter from './filter/date';
import 'swiper/css/swiper.css';

// 下四個為 fontAwesome 元件
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// // 使用 i 標籤必須新增
// import { dom } from "@fortawesome/fontawesome-svg-core";
Vue.use(Loading, {
  canCancel: false,
});
Vue.use(Vuex);

Vue.use(VueAxios, axios);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

Vue.component('Loading', Loading);

// 註冊 vee-validate 全域元件
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false;
// library.add(fas);

// vee-validate 中文化
localize('zh_TW', TW);
// VeeValidate， 將所有驗證條件加入 extend
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
new Vue({
  router: routes,
  store,
  render: (h) => h(App),
}).$mount('#app');
