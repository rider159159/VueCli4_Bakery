<template>
  <div class="toplink btn-color" v-on:click="scrollTop">
    <a href="#">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  methods: {
    scrollTop() {
      $('html,body').animate(
        {
          scrollTop: 0,
        },
        1500,
      );
    },
  },
};
</script>
