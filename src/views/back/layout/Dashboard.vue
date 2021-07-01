<template>
  <div>
    <Navbar></Navbar>
    <Alter></Alter>
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <!-- 這邊的 router-view 設定頁面是在 admin 下的 cildern  -->
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/back/Sidebar.vue';
import Navbar from '@/components/back/Navbar.vue';
import Alter from '@/components/back/AlterMessage.vue';

export default {
  components: {
    Sidebar,
    Navbar,
    Alter,
  },
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      // this.isLoading = true;
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      // Axios 預設值
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const api = `${process.env.VUE_APP_APIPATH}/auth/check`;
      this.$http
        .post(api, { api_token: this.token })
        .then((res) => {
          // 登入成功
          if (res.data.success) {
            this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
            this.isLoading = false;
            this.checkSuccess = true;
          }
        })
        .catch(() => {
          // 驗證失敗，轉回登入頁
          this.isLoading = false;
          this.$router.push('/login');
        });
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
