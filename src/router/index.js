import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // 進入不存在頁面會是空白的，因此新增設定
  {
    path: '*',
    redirect: 'Login',
  },
  //   前台頁面
  {
    path: '/',
    name: 'Front',
    component: () => import('@/views/front/layout/Front.vue'),
    children: [
      // 修改成前台頁面
      {
        path: '',
        name: 'Index',
        component: () => import('../views/front/Index'),
      }, {
        path: 'products',
        name: 'Proudcts',
        component: () => import('../views/front/Products'),
      }, {
        path: 'products_detail/:id',
        name: 'ProductsDetail',
        component: () => import('../views/front/ProductsDetail'),
      }, {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/About'),
      }, {
        path: 'news',
        name: 'News',
        component: () => import('../views/front/News'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/Cart'),
      },
      {
        path: 'cart_over/:orderId',
        name: 'CartOver',
        component: () => import('../views/front/CartOver'),
      },

    ],
  },

  //  後臺頁面
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/back/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('@/views/back/layout/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'back_products',
        name: 'BackProducts',
        component: () => import('@/views/back/BackProducts.vue'),
        meta: { requiresAuth: true },

      },
      {
        path: 'back_coupons',
        name: 'BackCoupons',
        component: () => import('@/views/back/BackCoupons.vue'),
        meta: { requiresAuth: true },

      },
      {
        path: 'back_orders',
        name: 'BackOrders',
        component: () => import('@/views/back/BackOrders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'back_storages',
        name: 'BackStorages',
        component: () => import('@/views/back/BackStorages.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/back/layout/Dashboard'),
    children: [
      {
        path: 'back_customer_order',
        name: 'BackCustomerOrder',
        component: () => import('@/views/back/BackCustomerOrder'),
      },
      {
        // 動態路由 76 章有講解
        path: 'back_customer_checkorder/:orderId',
        name: 'BackCustomerCheckOrder',
        component: () => import('@/views/back/BackCustomerCheckOrder'),
      },
    ],
  },

];

const router = new VueRouter({
  routes,
});

export default router;
