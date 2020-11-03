<template>
  <div>
    <Loading :active.sync="isLoading">
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only"></span>
      </div>
    </Loading>
    <section class="shop-area section-padding-0-100">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="list-group sticky-top mb-5">
              <a
                class="list-group-item list-group-item-action"
                href="#"
                @click.prevent="searchText = item"
                :class="{ 'active': item === searchText}"
                v-for="item in categories"
                :key="item"
              >
                <i class="fa fa-street-view" aria-hidden="true"></i>
                {{ item }}
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                @click.prevent="searchText = ''"
                :class="{ 'active': searchText === ''}"
              >全部顯示</a>
            </div>
          </div>
          <div class="col-12 col-md-9">
            <div class="d-flex flex-wrap">
              <div class="card-product" v-for="item in filterData" :key="item.id">
                <div class="product_img" :style="{backgroundImage:`url(${ item.imageUrl[0] })`}">
                  <a href="#" @click.prevent="toDetail(item.id)" class="card-product-link">查看更多</a>
                </div>
                <div
                  class="Product_farmer_img"
                  :style="{backgroundImage:`url(${item.options.farmer.imageUrl})`}"
                ></div>
                <div class="card-product-body">
                  <h5 class="card-product-title text-center h4">
                    <a href="#" class="text-dark">{{ item.title }}</a>
                  </h5>
                  <p
                    class="card-product-farmerName text-primary my-2 text-center"
                  >{{ item.options.farmer.name }}</p>
                  <p class="card-product-text text-center text-dark" v-html="item.content"></p>
                  <div
                    class="h5 text-danger text-center mb-0"
                    v-if="item.price"
                  >{{ item.price| currency}} 元</div>
                  <a href="#" @click.prevent="addtoCart(item.id)" class="card-product-addtocard">
                    <i class="fas fa-cart-plus fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    ...mapActions(['getProducts']),
    toDetail(id) {
      this.$router.push(`/products_detail/${id}`);
    },
    addtoCart(id, quantity = 1) {
      this.$store.dispatch('addtoCart', { id, quantity });
    },
  },
  created() {
    console.log(this.$bus);
    this.getProducts();
  },
  computed: {
    filterData() {
      const vm = this;
      if (vm.searchText) {
        return vm.products.filter((item) => {
          const data = item.category
            .toLowerCase()
            .includes(vm.searchText.toLowerCase());
          console.log(data, item);
          return data;
        });
      }
      return this.products;
    },
    ...mapGetters(['isLoading', 'loadingID', 'categories', 'products']),
  },
};
</script>
