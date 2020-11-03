<template>
  <div>
    <TopArea></TopArea>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
    <Scrolltop></Scrolltop>
  </div>
</template>
<script>
import TopArea from '@/components/front/TopArea.vue';
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';
import Scrolltop from '@/components/front/Scrolltop.vue';
import $ from 'jquery';

export default {
  components: {
    Navbar,
    TopArea,
    Footer,
    Scrolltop,
  },
  mounted() {
    // 對應 top 的
    $('.tooltip').tooltip('hide');
  },
};
</script>
