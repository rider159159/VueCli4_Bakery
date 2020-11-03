<template>
  <div>
    <Loading :active.sync="isLoading">
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only"></span>
      </div>
    </Loading>
    <div class="container">
      <div class="row justify-content-center mt-4 d-flex" v-if="cart.length!==0">
        <div class="col-lg-8">
          <h3 class="font-szie-150">購物車內容</h3>
          <ul>
            <li class="order-list" v-for="item in cart" :key="item.id">
              <div class="d-flex">
                <div class="ororder-list-img">
                  <img :src="item.product.imageUrl[0]" alt class="cart_image" />
                </div>
                <div class="ororder-list-content">
                  <ul>
                    <li>
                      <a
                        href="#"
                        @click.prevent="toProdctDetail(item.product.id)"
                      >{{item.product.title}}</a>
                    </li>
                    <li>
                      <div>類別 : {{ item.product.category }}</div>
                    </li>
                    <li>
                      <div>價格 : <span class="text-danger">{{ item.product.price | currency}}</span></div>
                    </li>
                    <li>數量 :{{item.quantity}}{{item.product.unit}} </li>
                  </ul>
                </div>
                <div class="ororder-list-delete">
                  <button class="btn btn-outline-danger" @click="removeCart(item.product.id)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <!-- <table class="table mt-4">
            <thead></thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td>
                  <button class="btn btn-outline-danger" @click="removeCart(item.product.id)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
                <td>
                  <img :src="item.product.imageUrl[0]" alt class="cart_image" />
                </td>
                <td>{{item.product.title}}</td>
                <td class="align-middle">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-primary"
                        @click="quantityUpdata(item.product.id, item.quantity + 1)"
                      >+</button>
                    </div>
                    <input
                      type="text"
                      class="form-control text-center cart-quantity"
                      :value="item.quantity"
                      @keyup.enter="quantityUpdata(item.product.id, $event.target.value)"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-primary"
                        :disabled="item.quantity === 1"
                        @click="quantityUpdata(item.product.id, item.quantity - 1)"
                      >-</button>
                    </div>
                  </div>
                </td>
                <td class="text-right">{{ item.product.unit }}</td>
                <td class="text-right">{{ item.product.price | currency }}</td>
              </tr>
              <tr>
                <td colspan="5" class="text-right">總計</td>
                <td class="text-right">{{cartTotal | currency}}</td>
              </tr>
              <tr v-if="coupon.enabled">
                <td colspan="5" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cartTotal * (coupon.percent / 100) }}</td>
              </tr>
            </tbody>
          </table> -->
          <!-- 套用優惠卷 -->
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCoupon">套用優惠卷</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <h3 class="font-szie-150 text-center mb-3">結帳表單</h3>
          <!-- 添加 slim 不會渲染成 span 標籤 -->
          <validation-observer v-slot="{ invalid }" class="col-md-9">
            <form @submit.prevent="createOrder">
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required">
                  <label for="username" class="mb-2 font-szie-md">
                    <i class="fas fa-user mr-1"></i>收件人姓名
                  </label>
                  <input
                    id="username"
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    :class="classes"
                  />
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider
                  v-slot="{ errors, classes }"
                  name="E-mail"
                  rules="required|email"
                >
                  <label for="email" class="mb-2 font-szie-md">
                    <i class="fas fa-envelope mr-1"></i>Email
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    :class="classes"
                  />
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required|min:8">
                  <label for="tel" class="mb-2 font-szie-md">
                    <i class="fas fa-phone mr-1"></i>電話
                  </label>
                  <input
                    id="tel"
                    v-model="form.tel"
                    type="tel"
                    class="form-control"
                    :class="classes"
                  />
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required">
                  <label for="address" class="mb-2 font-szie-md">
                    <i class="fas fa-map-marker-alt mr-1"></i>地址
                  </label>
                  <input
                    id="address"
                    v-model="form.address"
                    type="text"
                    class="form-control"
                    :class="classes"
                  />
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="message" class="mb-2 font-szie-md">
                  <i class="fas fa-money-bill-wave mr-1"></i>購買方式
                </label>
                <select v-model="form.payment" class="form-control" required>
                  <option value disabled>請選擇付款方式</option>
                  <option value="WebATM">WebATM</option>
                  <option value="ATM">ATM</option>
                  <option value="CVS">CVS</option>
                  <option value="Barcode">Barcode</option>
                  <option value="Credit">Credit</option>
                  <option value="ApplePay">ApplePay</option>
                  <option value="GooglePay">GooglePay</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message" class="mb-2 font-szie-md">
                  <i class="fab fa-line mr-1"></i>留言
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-control"
                  cols="30"
                  rows="3"
                />
              </div>
              <div class="text-right">
                <button type="submit" class="btn btn-primary" :disabled="invalid">送出表單</button>
              </div>
            </form>
          </validation-observer>
        </div>

        <!-- 刪除訂單 modal -->
        <div
          class="modal fade"
          id="delCartModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content border-0">
              <div class="modal-header bg-danger text-white">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span>刪除產品</span>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                是否刪除
                <!-- 無法直接使用 {{tempCart.product.title}} -->
                <strong class="text-danger">{{tempCart.product.title}}</strong> 商品(刪除後將無法恢復)。
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger" @click.prevent="removeCart">確認刪除</button>
              </div>
            </div>
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
      products: [],
      coupon_code: '',
      coupon: {},
      tempCart: {
        product: {
          title: '',
        },
      },
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
    };
  },
  methods: {
    ...mapActions(['getCart']),
    // 開啟刪除 Modal
    openDelModal(item) {
      this.$set(this, 'tempCart', item);
      $('#delCartModal').modal('show');
    },
    // 確認刪除
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
    },
    // 商品數量增減
    quantityUpdata(id, num) {
      // 避免商品數量低於 0 個
      if (num <= 0) return;
      this.$store.dispatch('quantityUpdata', { id, num });
    },
    // 套用優惠卷
    addCoupon() {
      this.$store.commit('LOADING', true);
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.$http
        .post(api, { code: this.coupon_code })
        .then((response) => {
          this.coupon = response.data.data;
          this.$store.commit('LOADING', false);
        })
        .catch((error) => {
          const errorData = error.response.data.errors;
          if (errorData) {
            // errorData.code.forEach((err) => {
            //   this.$bus.$emit(
            //     'message:push',
            //     `加入失敗惹，好糗Σ( ° △ °|||)︴
            // ${err}`,
            //     'danger'
            //   );
            // });
            this.$store.commit('LOADING', false);
          } else {
            // const { message } = error.response.data;
            // this.$bus.$emit(
            //   'message:push',
            //   `加入失敗惹，好糗Σ( ° △ °|||)︴
            // ${message}`,
            //   'danger'
            // );
            this.$store.commit('LOADING', false);
          }
        });
    },
    // 送出購物訂單
    createOrder() {
      this.$store.commit('LOADING', true);
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`;
      const order = { ...this.form };
      // 如果有優惠卷就加入，請注意該 coupon 必須先執行過 this.addCoupon()
      // 主要會使用 enabled 屬性判斷該 coupon 是否可以使用
      // 如果沒有執行 this.addCoupon() 那麼 enabled 就會是 undefined，因此還是不會執行
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }
      this.$http
        .post(api, order)
        .then((response) => {
          if (response.data.data.id) {
            console.log(response);
            this.$router.push(`/cart_over/${response.data.data.id}`);
          }
          this.$store.commit('LOADING', false);
        })
        .catch(() => {
          // const errorData = error.response.data.errors;
          // errorData.forEach((err) => {
          //   this.$bus.$emit(
          //     'message:push',
          //     `建立訂單失敗惹，好糗Σ( ° △ °|||)︴
          // ${err}`,
          //     'danger'
          //   );
          // });
          this.$store.commit('LOADING', false);
        });
    },
    toProdctDetail(id) {
      $('.navbar').removeClass('active');
      this.$router.push(`/products_detail/${id}`);
      // $('html,body').animate(
      //   {
      //     scrollTop: 0,
      //   },
      //   1000,
      // );
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'cart', 'cartTotal']),
  },
  created() {
    this.getCart();
    this.$http.get('test.json').then((res) => console.log(res));
    // fetch("lineup.json")
    //   .then(response => response.json())
    //   .then(json => console.log(json));
  },
};
</script>
<style lang="scss" scope>
</style>
