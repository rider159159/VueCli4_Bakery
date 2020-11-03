<template>
  <div>
    <div class="nav-wrap bg-white">
      <!-- 上方 nav -->
      <nav class="navbar container">
        <a href="#" @click.prevent="routerLink('')" class="logo"></a>
        <span class="logo_text ml-2">讀蔬會</span>
        <ul class="ml-auto top-menu">
          <li class>
            <a href="#" @click.prevent="routerLink('')" class="nav-link"
              >首頁</a
            >
          </li>
          <li class>
            <a href="#" @click.prevent="routerLink('products')" class="nav-link"
              >商品</a
            >
          </li>
          <li class>
            <a href="#" @click.prevent="routerLink('about')" class="nav-link"
              >關於我們</a
            >
          </li>
          <li>
            <a href="#" @click.prevent="routerLink('news')" class="nav-link"
              >最新消息</a
            >
          </li>
          <li>
            <a href="#" @click.prevent="routerLink('admin')" class="nav-link"
              >管理頁面</a
            >
          </li>
          <div class="cartIcon" @click="showModal()">
            <i class="fas fa-shopping-cart"></i>
            <span v-if="cart">{{ cart.length }}</span>
          </div>
        </ul>
        <div class="classy-navbar-toggler">
          <span class="navbarToggler" v-on:click="sideNavbarActive">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <!-- 左側 nav -->
        <div class="side-menu">
          <!-- Close Button -->
          <div class="side-close" v-on:click="sideNavbarActive">
            <div class="cross-wrap">
              <span class="top"></span>
              <span class="bottom"></span>
            </div>
          </div>
          <div class="sidenav">
            <ul>
              <li class="active">
                <a href="#" @click.prevent="routerLink('')" class="nav-link"
                  >首頁</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="routerLink('products')"
                  class="nav-link"
                  >商品</a
                >
              </li>
              <li>
                <a
                  href="#"
                  @click.prevent="routerLink('about')"
                  class="nav-link"
                  >關於我們</a
                >
              </li>
              <li>
                <a href="#" @click.prevent="routerLink('news')" class="nav-link"
                  >最新消息</a
                >
              </li>
            </ul>
            <div class="cartIcon" @click="showModal()">
              <span>{{ cart.length }}</span>
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>
          <!-- Navbar End -->
        </div>
      </nav>
    </div>
    <!--有購物車 modal 視窗 -->
    <div
      class="modal fade"
      id="cartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cartModalLabel">購物清單</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- 商品資訊 -->
            <table class="table">
              <thead>
                <th>刪除</th>
                <th>品名</th>
                <th>數量</th>
                <th>單位</th>
                <th>單價</th>
              </thead>
              <tbody v-if="cart.length">
                <tr v-for="item in cart" :key="item.id">
                  <td>
                    <button
                      class="btn btn-outline-danger"
                      @click="removeCart(item.product.id)"
                    >
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                  <td class="align-middle">{{ item.product.title }}</td>
                  <!-- 數量 / 單位 -->
                  <td class="align-middle">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <button
                          class="btn btn-outline-primary"
                          @click="
                            quantityUpdata(item.product.id, item.quantity + 1)
                          "
                        >
                          +
                        </button>
                      </div>
                      <input
                        type="text"
                        class="form-control text-center cart-quantity"
                        :value="item.quantity"
                        @keyup.enter="
                          quantityUpdata(item.product.id, $event.target.value)
                        "
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-outline-primary"
                          :disabled="item.quantity <= 1"
                          @click="
                            quantityUpdata(item.product.id, item.quantity - 1)
                          "
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="align-middle">{{ item.product.unit }}</td>
                  <td class="align-middle text-right">
                    {{ item.product.price | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" class="text-right">總計</td>
                  <td class="text-right">{{ cartTotal }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <!-- <router-link class="btn btn-primary" to="/cart">結帳</router-link> -->
            <button type="button" @click="toCart()" class="btn btn-primary">
              結帳
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--空 modal 視窗 -->
    <div
      class="modal fade"
      id="nullCartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="nullCartModalLabel">空 modal</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click.prevent="toProduct()"
            >
              前往購物
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    ...mapActions(['getCart']),
    // 切換頁面，移除 sidebar 、 scrollbar 移至最上方
    routerLink(to) {
      $('.navbar').removeClass('active');
      this.$router.push(`/${to}`);
      $('html,body').animate(
        {
          scrollTop: 0,
        },
        1000,
      );
    },
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
    },
    // 購物車增減
    quantityUpdata(id, num) {
      // 避免商品數量低於 0 個
      if (num <= 0) return;
      this.$store.dispatch('quantityUpdata', { id, num });
    },
    // sidebar 切換效果
    sideNavbarActive() {
      $('.navbar').toggleClass('active');
    },
    // navbar 添加 fixed-top
    scrollClass() {
      if ($(window).scrollTop() > 50) {
        // 顯示上面那層
        $('.nav-wrap').addClass('fixed-top');
        // 順便開啟 tooltip 功能
        $(() => {
          $('[data-toggle="tooltip"]').tooltip();
        });
      } else {
        $('.nav-wrap').removeClass('fixed-top');
      }
    },
    //  購物車 modal 判斷顯示
    showModal() {
      const vm = this;
      if (vm.cart.length > 0) {
        $(' #cartModal').modal('show');
      } else {
        $('#nullCartModal').modal('show');
      }
    },
    // 去結帳
    toCart() {
      $('#cartModal').modal('hide');
      $('.navbar').removeClass('active');
      this.$router.push('/cart');
    },
    // 去購物
    toProduct() {
      $('#nullCartModal').modal('hide');
      $('.navbar').removeClass('active');
      this.$router.push('/products');
    },
  },
  computed: {
    ...mapGetters(['cart', 'cartTotal']),
  },
  mounted() {
    window.addEventListener('scroll', this.scrollClass);
    this.getCart();
  },
};
</script>
