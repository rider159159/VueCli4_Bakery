<template>
  <div>
    <CarouselHome></CarouselHome>
    <!-- 區塊一，農場介紹 -->
     <button type="button" class="btn btn-primary m-3" @click="addtoCart(product.id, product.num)">
            add to cart
          </button>
    <section class="farm-introduce pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-5">
            <img src="../../assets/image/bg-img/2.jpg" alt />
          </div>
        </div>
        <div class="row justify-content-center">
          <!-- Single Benefits Area -->
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

          <!-- Single Benefits Area -->
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

          <!-- Single Benefits Area -->
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
    </section>
    <!-- 我們的故事 -->
    <section class="about-us-area">
      <div class="container">
        <div class="row align-items-center">
          <!-- About Us Content -->
          <div class="col-12 col-md-6">
            <div class="about-us-content mb-100">
              <!-- Section Heading -->
              <div class="section-heading">
                <p>About us</p>
                <h2>
                  關於
                  <span>我們</span>的故事
                </h2>
                <img src="../../assets/image/core-img/decor.png" alt />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam nunc elit, pretium atlanta urna veloci, fermentum malesuda mina. Donec auctor nislec neque sagittis, sit amet dapibus pellentesque donal feugiat. Nulla mollis magna non
                sanaliquet, volutpat do zutum, ultrices consectetur, ultrices at purus.
              </p>
              <a href="#" class="btn btn-color mt-40">Read More</a>
            </div>
          </div>

          <!-- Famie Video Play -->
          <div class="col-12 col-md-6">
            <div class="about-us-video mb-50">
              <lazy-youtube-video
                src="https://www.youtube.com/embed/6ixLzWubIDo"
                aspectRatio="4:3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--我們的理念  -->
    <section class="farm-idea">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-5">
            <div class="bg-img"></div>
          </div>
          <div class="col-12 col-md-7">
            <div class="farm-idea-introduce">
              <div class="container-fluid">
                <div class="row">
                  <div class="section-heading">
                    <p>WHAT WE DO</p>
                    <h2>
                      <span>在地食材</span>連繫在地情感
                    </h2>
                    <img src="../../assets/image/core-img/decor.png" alt />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 mb-50">
                    <p>與150位農民合作、約300項的蔬果來自在地農友，提供你好品質、新鮮又安全的食材。</p>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="single-service-area mb-50">
                      <!-- Service Title -->
                      <div class="service-title mb-3 d-flex align-items-center">
                        <i class="fas fa-lemon fa-2x mr-2"></i>
                        <h5>產地直採的用意為何？</h5>
                      </div>
                      <p>我們與150位農民合作，約300項的蔬菜和水果來自於我們合作的在地農友，產地直送確保美味，安心的生鮮品質。</p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="single-service-area mb-50">
                      <!-- Service Title -->
                      <div class="service-title mb-3 d-flex align-items-center">
                        <i class="fas fa-lightbulb fa-2x mr-2"></i>
                        <h5>產地直採是嶄新的理念嗎？</h5>
                      </div>
                      <p>產地直採已經成為台灣市場的新主流，提供好品質，新鮮又安全的食材，同時也幫助農民增加獲利。</p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="single-service-area mb-50">
                      <!-- Service Title -->
                      <div class="service-title mb-3 d-flex align-items-center">
                        <i class="fas fa-dove fa-2x mr-2"></i>
                        <h5>未來的目標為何？</h5>
                      </div>
                      <p>期望能夠成為台灣本地農友最可靠的伙伴，並協助農友由一般耕作農法轉變為履歷或有機種植耕種方式。</p>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="single-service-area mb-50">
                      <!-- Service Title -->
                      <div class="service-title mb-3 d-flex align-items-center">
                        <i class="far fa-dot-circle fa-2x mr-2"></i>
                        <h5>下一步行動方向？</h5>
                      </div>
                      <p>我們承諾以更實惠的價格讓本地食材成為餐桌上的日常幸福，而在未來我們期待能提供更多國產水果和蔬菜。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 商品，等等使用 swiper  -->
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
    <section>
      <h3>聯絡我們</h3>
    </section>
  </div>
</template>
<script>
import CarouselHome from '@/components/front/CarouselHome.vue';
import CarouselShop from '@/components/front/CarouselShop.vue';
import LazyYoutubeVideo from 'vue-lazy-youtube-video';
// aos 區域組件
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 2000, // 動畫時間
});
// import "jquery";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    CarouselHome,
    CarouselShop,
    LazyYoutubeVideo,
  },
};
</script>
