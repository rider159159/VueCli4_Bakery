<template>
  <div class="top-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="top-area-content d-flex align-items-center justify-content-between">
              <p>
                歡迎來到
                <span>炙燒食堂</span>，如有購物、加盟等問題歡迎聯繫
              </p>
              <div class="top-meta text-right d-lg-none">
                <i class="far fa-envelope mr-3" data-toggle="tooltip" data-placement="bottom" title="rider159159@gmail.com"></i>
                <i class="fas fa-phone"  data-toggle="tooltip" data-placement="bottom" title="02-345678910"></i>
              </div>
              <div class="top-meta text-right d-none d-lg-flex">
                <div class="d-flex mr-3">
                  <i class="far fa-envelope mr-2"></i>
                  <span>rider159159@gmail.com</span>
                </div>
                <div class="d-flex">
                    <i class="fas fa-phone mr-2"></i>
                    <span>02-345678910</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
};
</script>
