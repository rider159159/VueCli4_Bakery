<template>
  <div class="my-5 row no-gutters justify-content-center top-area">
    <Loading :active.sync="isLoading" />
   <div class="col-md-6
   ">
      <div class="cartOver-title table-title bg-secondary text-white">
      <i class="fas fa-tasks"></i>
      <h4 class="text-center p-3">訂單資料</h4>
    </div>
    <div class="px-3 bg-white">
      <form class @submit.prevent="payOrder">
        <table class="table">
          <thead class="border-0">
            <th class="border-0">品名</th>
            <th class="border-0">數量</th>
            <th class="border-0">單價</th>
          </thead>
          <tbody>
            <tr v-for="(item, key) in order.products" :key="key">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.quantity }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.product.price }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">總金額</td>
              <td class="text-right">{{ order.amount }}</td>
            </tr>
          </tfoot>
        </table>
        <h4 class="text-center table-title">顧客資料</h4>
        <table class="table text-center">
          <tbody>
            <tr>
              <th class="border-0 px-0">Email</th>
              <td class="border-0 px-0">{{ order.user.email }}</td>
            </tr>
            <tr>
              <th class="border-0 px-0">顧客姓名</th>
              <td class="border-0 px-0">{{ order.user.name }}</td>
            </tr>
            <tr>
              <th class="border-0 px-0">收件人電話</th>
              <td class="border-0 px-0">{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th class="border-0 px-0">收件人地址</th>
              <td class="border-0 px-0">{{ order.user.address }}</td>
            </tr>
            <tr>
              <th class="border-0 px-0">付款狀態</th>
              <td class="border-0 px-0">
                <span v-if="!order.paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="order.paid === false" class="text-right">
          <button class="btn btn-danger">確認付款去</button>
        </div>
      </form>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerCheckout',
  data() {
    return {
      order: {
        user: {},
      },
      orders: [],
      orderId: '',
      uuid: process.env.VUE_APP_UID,
      isLoading: false,
    };
  },
  created() {
    this.orderId = this.$route.params.orderId;

    if (this.orderId) {
      this.getDetailed(this.orderId);
    }

    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.orders = response.data.data;
        this.isLoading = false;
      });
    },
    getDetailed(id) {
      this.isLoading = true;
      this.orderId = id;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${id}`;
      this.$http.get(url).then((response) => {
        this.order = response.data.data;

        this.isLoading = false;
      });
    },
    payOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;

      this.$http.post(url).then((response) => {
        if (response.data.data.paid) {
          this.getDetailed(this.orderId);
        }
        this.isLoading = false;
      });
    },
  },
};
</script>
