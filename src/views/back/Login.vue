<template>
  <div>
    <Loading :active.sync="isLoading">
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only"></span>
      </div>
    </Loading>
    <AlertMessage />
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="user.email"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="user.password"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
    </form>
  </div>
</template>

<script>
import AlertMessage from '@/components/back/AlterMessage.vue';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    signin() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/auth/login`;
      this.$http
        .post(url, this.user)
        .then((res) => {
          this.isLoading = false;
          const { token } = res.data;
          const { expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(
            expired * 1000,
          )};`;
          this.$router.push('/admin/back_products');
        })
        .catch(() => {
          this.isLoading = false;
          this.$bus.$emit('error:push', '帳號或密碼錯誤。請重新輸入', 'danger');
        });
    },
  },
  components: {
    AlertMessage,
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
