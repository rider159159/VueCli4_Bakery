<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide class="swiper-item1">
      <div class="swiper-item-title" data-aos="fade-down">
        <p class="text-white text-xl h1">全民抗疫大作戰! </p>
        <h3 class="text-white h5">本店消費滿百元，輸入折價券一律 9 折</h3>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-item2">
      <div class="swiper-item-title" data-aos="fade-up">
        <p class="text-white text-xl h1">炙燒食堂周年慶！</p>
        <h3 class="text-white h5">內用白飯、湯品一律免費。</h3>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-item3">
      <div class="swiper-item-title" data-aos="fade-down">
        <p class="text-white text-xl h1">分享好康!</p>
        <h3 class="text-white h5">內用首次打卡，附贈 20 元，糖心蛋 一份</h3>
      </div>
    </swiper-slide>
    <div
      class="swiper-button-next swiper-button-white"
      slot="button-next"
    ></div>
    <div
      class="swiper-button-prev swiper-button-white"
      slot="button-prev"
    ></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import $ from 'jquery';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 2000, // 動畫時間
});
export default {
  name: 'carrousel',
  data() {
    return {
      product: {
        category: 'carousel', // 自訂名稱
      },
      swiperOptions: {
        keyboard: true,
        speed: 1500, // 切換圖片滑動的速度
        loop: true, // 是否循環撥放
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
        on: {
          slideChangeTransitionStart() {
            $('.text').hide(0);
            $('.text').removeClass('aos-init').removeClass('aos-animate');
          },
          slideChangeTransitionEnd() {
            $('.text').show(0);
            AOS.init();
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

 <style scoped lang="scss">
 .swiper-item1 {
    background: url('~@/assets/image/bg-img/swiper1.jpg') center center no-repeat;
}
.swiper-item2 {
}
.swiper-item3 {
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: cover;
}
// 設定區塊高度
.swiper-slide {
  min-height: 450px;

  @media (min-width: 768px) {
    min-height: 550px;
  }

  @media (min-width: 1200px) {
    min-height: 600px;
  }
}
// 遮罩效果
.swiper-slide:after {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}
.swiper-item-title {
    z-index: 2;
}
.swiper-pagination{
background: gray;
}

</style>
