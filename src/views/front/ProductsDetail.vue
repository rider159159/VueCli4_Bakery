<template>
  <div>
    <Loading :active.sync="isLoading">
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only"></span>
      </div>
    </Loading>
    <section class="shop-area section-padding-0-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <img :src="selectImage" class />
            <swiper
              class="swiper"
              :options="swiperOptions"
              v-if="product.imageUrl[1]"
            >
              <swiper-slide
                v-for="(item, index) in product.imageUrl"
                class="product-swiper-slide"
                :key="index"
              >
                <img
                  :src="item"
                  class
                  @click="selectImg(product.imageUrl[index])"
                />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div
                class="swiper-button-prev p-2"
                slot="button-prev"
                v-if="product.imageUrl[1]"
              ></div>
              <div
                class="swiper-button-next p-2"
                slot="button-next"
                v-if="product.imageUrl[1]"
              ></div>
            </swiper>
            <div class="product_select">
              <span>{{ product.price }}</span>
              <div class="product-num">
                數量:
                <select v-model="product.num">
                  <option value="0"
 disabled selected>請選擇數量</option>
                  <option v-for="num in 10" :key="num" :value="num">
                   {{ num }}
                  </option>
                  </select>
                   {{ product.unit }}
              </div>
              <button @click="addtoCart(product.id,product.num)">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-6"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  data() {
    return {
      Cart: [],
      itemID: '',
      product: {
        imageUrl: [],
        num: 0,
      },
      selectImage: '',
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        },
        // 自動撥放
        autoplay: {
          delay: 30000,
          disableOnInteraction: false,
        },
      },
    };
  },
  methods: {
    getProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      vm.$store.commit('LOADING', true);
      vm.$http.get(api).then((response) => {
        console.log(response);
        vm.product = response.data.data;
        vm.selectImg(vm.product.imageUrl[0]);
        vm.$store.commit('LOADING', false);
      });
    },
    selectImg(imgURL) {
      this.selectImage = imgURL;
    },
    addtoCart(id, quantity = 1) {
      console.log(id, quantity);
      this.$store.dispatch('addtoCart', { id, quantity });
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'loadingID']),
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    const vm = this;
    console.log(vm.$route.params);
    vm.itemID = vm.$route.params.id; // 須和路由設置一樣id名稱
    vm.getProduct(vm.itemID);
    $('.tooltip').tooltip('hide');
  },
};
</script>
<style scope lang="scss">
.test {
  font-family: 'Courier New', Courier, monospace;
}
.swiper-container {
  padding: 1.25rem;
}
</style>
