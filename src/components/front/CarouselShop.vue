<template>
  <div>
    <Loading :active.sync="isLoading">
      <div class="spinner-grow text-primary"  style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </Loading>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in products" :key="index">
        <div class="card">
          <img :src="item.imageUrl" class="card-img-top" alt />
          <div class="product-meta-data">
            <router-link
              :to="'/products_detail/'+item.id"
              data-toggle="tooltip"
              data-placement="top"
              title="詳細資訊"
            >
              <i class="fas fa-search"></i>
            </router-link>
            <button
              ref="shopBtn"
              :data-num="index"
              type="button"
              data-toggle="tooltip"
              data-placement="top"
              title="加入購物車"
            >
              <i class="fas fa-shopping-cart shop-icon" :data-num="index"></i>
            </button>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">$ {{item.price}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import $ from 'jquery';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'carrousel',
  data() {
    return {
      // swiper 設定
      swiperOptions: {
        autoplay: {
          // 自動撥放
          delay: 3000,
          disableOnInteraction: false,
        },
        on: {
          click: this.swiperClick,
        },
        speed: 1000, // 切換速度
        loop: true, // 是否循環撥放
        slidesPerView: 2, // 預設 slider 數量
        spaceBetween: 30, // slider 間隔
        breakpoints: {
          // 斷點
          576: {
            spaceBetween: 60,
            slidesPerView: 3, // 預設 slider 數量
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next', // 下一個按鈕
          prevEl: '.swiper-button-prev', // 上一個按鈕
        },
      },
    };
  },
  methods: {
    ...mapActions(['getProducts', 'addtoCart']),
    // 獲得商品後在監聽，避免 tooltip 無法顯示
    tooltipList() {
      $("[data-toggle='tooltip']").tooltip();
    },
    swiperClick(e, qty) {
      const vm = this;
      if (!e.target.dataset.num) return;
      // 指向 DOM 的 data 數字
      const dataIndex = e.target.dataset.num;
      // 指向 Vue products[數字]
      const products = vm.products[dataIndex];
      const { id } = products;
      vm.$store.dispatch('addtoCart', { id, qty });
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'products']),
  },
  mounted() {
    this.getProducts();
    this.tooltipList();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

 <style scoped  lang='scss'>
 .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.product-meta-data {
  position: absolute;
  bottom: 25%;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  button {
    border: 0;
  }
}
.shop-icon {
  color: #90ac10;
}
.product-meta-data a,
.product-meta-data button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 16px;
  margin: 0 10px;
  line-height: 42px;
  opacity: 0;
  transition: all 0.5s;
}

.product-meta-data a:hover,
.product-meta-data button:hover {
  background-color: #90ac10;
  color: #fff;
  .shop-icon {
    color: #fff;
  }
}
.card {
  border: 0;
  margin: 0 10px;
}
.card:hover a,
.card:hover button {
  opacity: 1;
}
</style>
