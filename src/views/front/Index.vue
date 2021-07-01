<template>
  <div class="index-area">
    <CarouselHome></CarouselHome>
    <div  :style="{backgroundImage:`url(${item.options.farmer.imageUrl})`}" ></div>
 <img src="../../assets/image/core-img/windmill.png" alt />
    <!-- 區塊一，農場介紹 -->
    <!-- <section class="introduce pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-5"></div>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-12 col-sm-4 col-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <div class="farm-introduce-item fadeInUp mb-5">
              <img src="../../assets/image/core-img/windmill.png" alt />
              <h5>產地直銷</h5>
            </div>
          </div>

          <div
            class="col-12 col-sm-4 col-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div class="farm-introduce-item fadeInUp mb-5">
              <img src="../../assets/image/core-img/cereals.png" alt />
              <h5>保證天然</h5>
            </div>
          </div>

          <div
            class="col-12 col-sm-4 col-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <div class="farm-introduce-item fadeInUp mb-5">
              <img src="../../assets/image/core-img/sunrise.png" alt />
              <h5>保護生態</h5>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- 歡迎來到 -->
    <section class="about-us-area container-fluid">
      <div class="about-us-content py-4 row align-items-center flex-column justify-content-center flex-md-row flex-nowrap">
        <div class="about-us-image pr-0 pr-md-4">
          <h3 class="my-4 d-block d-md-none text-white text-center">
            歡迎來到炙燒食堂
          </h3>
          <img class="" src="../../assets/image/bg-img/BG-1.jpg" alt />
        </div>
        <div class="about-us-text d-flex flex-column">
          <div class="d-md-flex d-none flex-column my-4">
            <span class="en-title mb-2">welcome to Roast canteen</span>
            <h3 class="d-block text-white">
              歡迎來到炙燒食堂
            </h3>
          </div>
          <p class="text-white mt-4 mt-md-0">
            滿足帶來的喜悅感，
            是世界上最難形容的感動，
            如同餓意湧上時 恰遇的一碗燒肉飯
            滋滋現烤的大塊肉鋪滿整碗，
            什麼儀態啊，統統拋入腦後，
            只管吃的呼呼作響，盡抒自在愜意。
          </p>
          <p class="mt-2 text-white">以肉為魂，安撫每一個飢餓的胃和疲憊的心。</p>
          <a href="#" class="btn btn-color mt-4 btn btn-color mt-4 d-flex align-self-md-end align-self-center">查看更多</a>
        </div>
      </div>
    </section>
    <!-- 理想 -->
    <section class="promise">
      <div class="promise-top d-flex flex-column align-items-center justify-content-center">
        <h4 class="text-white mb-3">我們的承諾</h4>
        <span class="text-white bg-secondary">用心對待每份產品</span>
      </div>
      <div class="promise-content py-4">
        <ul class="text-white d-flex flex-column flex-md-row align-items-center align-items-center justify-content-around pl-0">
          <li class="d-flex flex-column align-items-center">
            <span class="promise-content-icon bg-primary d-flex align-items-center justify-content-center">
              <img src="../../assets/image/bg-img/icon-1.svg" alt="">
            </span>
              <h5 class="text-primary my-3 promise-content-title">保證新鮮</h5>
              <p class="text-dark text-center">每份餐點都是當日限量，配上專業的冷凍物流，讓您吃到當日最新鮮的食物，消費者吃得安心是對我們最大的鼓勵。</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="promise-content-icon bg-primary d-flex align-items-center justify-content-center">
              <img src="../../assets/image/bg-img/icon-2.svg" alt="">
            </span>
              <h5 class="text-primary my-3 promise-content-title">價格實惠</h5>
              <p class="text-dark text-center">誰說吃的好一定要花大錢?
                <br>
                我們每道料理以最實惠的價格進行販售，讓前來的客人們都能感受到滿滿的飽足感與幸福感。</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span class="promise-content-icon bg-primary d-flex align-items-center justify-content-center">
              <img src="../../assets/image/bg-img/icon-3.svg" alt="">
            </span>
              <h5 class="text-primary my-3 promise-content-title">營養滿分</h5>
              <p class="text-dark">除了由肉類提供滿滿蛋白質，我們每道料理都會精心挑選蔬菜以提供維生素、纖維保持人體每餐所需的營養，讓你吃的好同時也吃得健康。</p>
          </li>
        </ul>
      </div>
    </section>
    <!-- 熱門商品，使用 swiper-->
    <section class="my-5">
      <div class="section-heading text-center">
        <div class="container-fluid">
          <p>Featured Products</p>
          <h2>熱門商品</h2>
          <img src="../../assets/image/core-img/decor2.png" alt />
        </div>
        <div class="mt-4">
          <CarouselShop></CarouselShop>
        </div>
      </div>
    </section>
    <!-- 聯絡我們 -->
    <section>
      <h3>聯絡我們</h3>
      <div class="email-section d-flex flex-column justify-content-center align-items-center">
        <div class="email-content">
          <div class="email-title mb-3 text-primary">
            訂閱我們
            <br class="mb-3" />
            獲得最新消息及優惠
          </div>
          <div class="email-input input-group d-flex">
            <input type="text" />
            <button class="text-white bg-primary">訂閱</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import CarouselHome from "@/components/front/CarouselHome.vue";
import CarouselShop from "@/components/front/CarouselShop.vue";

// aos 區域組件
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 2000, // 動畫時間
});
// import "jquery";
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    CarouselHome,
    CarouselShop,
  },
};
</script>
