import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
  // 嚴警模式
  strict: true,
  state: {
    loadingStatus: {
      isLoading: false,
      loadingID: '',
    },
    cart: {},
    cartTotal: 0,
    products: [],
    categories: [],
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getCart(context) {
      console.log(this);
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      context.commit('LOADING', true);
      axios.get(url).then((response) => {
        context.commit('CARTS', response.data.data);
        context.commit('CARTSTOTAL', response.data.data);
        context.commit('LOADING', false);
      });
    },
    // 移除購物車內容，會重新抓購物車 API
    removeCart(context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      context.commit('LOADING', true);
      axios.delete(url).then((response) => {
        context.commit('LOADING', false);
        context.dispatch('getCart');
        console.log('刪除購物車項目', response);
      });
    },
    // 商品數量增減
    quantityUpdata(context, { id, num }) {
      // 避免商品數量低於 0 個
      context.commit('LOADING', true);
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      const data = {
        product: id,
        quantity: num,
      };
      axios.patch(url, data).then(() => {
        context.commit('LOADING', true);
        context.dispatch('getCart');
      });
    },
    // 添加購物車，會重新抓購物車 API
    addtoCart(context, { id, quantity = 1 }) {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      context.commit('LOADING', true);
      context.commit('LOADINGID', id);
      axios.post(url, cart).then(() => {
        context.dispatch('getCart');
        context.commit('LOADING', false);
        context.commit('LOADINGID', '');
      }).catch({});
    },
    // 或得商品，主要是用來配合 Vuex load 效果。
    getProducts(context) {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`;
      context.commit('LOADING', true);
      axios.get(url).then((response) => {
        console.log(response);
        context.commit('PRODUCTS', response.data.data);
        context.commit('CATEGORIES', response.data.data);
        context.commit('LOADING', false);
      });
    },
    removeAllCartItem(context) {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      context.commit('LOADING', true);
      axios.delete(url).then((response) => {
        context.commit('LOADING', false);
        context.dispatch('getCart');
        console.log('刪除購物車項目', response);
      });
    },
  },
  mutations: {
    LOADING(state, status) {
      state.loadingStatus.isLoading = status;
    },
    LOADINGID(state, status) {
      state.loadingStatus.loadingID = status;
    },
    CARTS(state, payload) {
      state.cart = payload;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    CATEGORIES(state, payload) {
      const categories = new Set();
      console.log(payload);
      payload.forEach((item) => {
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
    },
    CARTSTOTAL(state, payload) {
      state.cartTotal = 0;
      payload.forEach((item) => {
        state.cartTotal += item.product.price * item.quantity;
      });
    },
  },
  getters: {
    categories: (state) => state.categories,
    isLoading: (state) => state.loadingStatus.isLoading,
    loadingID: (state) => state.loadingStatus.loadingID,
    cart: (state) => state.cart,
    products: (state) => state.products,
    cartTotal: (state) => state.cartTotal,
  },
});
