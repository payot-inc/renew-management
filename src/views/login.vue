<template>
  <div class="login">
    <div class="login_head">
      <div class="logo">
        <img src="@/assets/img/logo_ww.png">
        <span>무인장비 매출관리시스템</span>
      </div>
    </div>
    <div class="container">
      <div class="login_title">
        <h3>로그인</h3>
        <p>로그인을 하셔야 서비스를 이용하실 수 있습니다</p>
      </div>
      <div class="login_box">
        <ul>
          <li>
            <div class="ui fluid left icon input">
              <i class="user icon"></i>
              <input v-model="email" v-validate="'required|email'" type="text" placeholder="사용자ID">
            </div>
          </li>
          <li>
            <div class="ui fluid left icon input">
              <i class="lock icon"></i>
              <input
                type="password"
                v-model="password"
                v-validate="{ required: true, min: 4, max: 12 }"
                name="password"
                placeholder="비밀번호"
                @keyup.enter="setLogin()"
              >
            </div>
          </li>
          <li>
            <div @click="setLogin()" class="ui fluid large violet submit button">로그인</div>
          </li>
          <li>
            <div @click="wrapPage()" class="ui fluid inverted violet button">TheLandry 홈페이지 돌아가기</div>
          </li>
        </ul>
      </div>
    </div>

    <sui-modal v-model="progress" size="mini">
      <sui-modal-content>
        <sui-icon name="spinner" size="big"></sui-icon>로그인을 시도 중 입니다.
      </sui-modal-content>
    </sui-modal>

    <sui-modal v-model="errorShow" size="mini">
      <sui-modal-header>로그인 오류</sui-modal-header>
      <sui-modal-content>{{ errorMsg }}</sui-modal-content>
      <sui-modal-actions>
        <sui-button @click="errorShow = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      progress: false,
      errorShow: false,
      errorMsg: '',
    };
  },
  methods: {
    ...mapActions(['login']),

    setLogin() {
      const self = this;

      this.progress = true;

      this.login({ email: this.email, password: this.password })
        .then(() => {
          self.progress = false;
          self.$router.push('/calendar');
        })
        .catch((err) => {
          self.progress = false;

          if (!err.response) return;

          const message = err.response.body;

          self.errorShow = true;
          self.errorMsg = message;
        });
    },

    wrapPage() {
      const win = window.open('http://www.thelaundry.co.kr/', '_blank');
      win.focus();
    },
  },
};
</script>

<style scoped>
/* 로그인페이지 */
body {
  height: 100%;
}

.login {
  background: #efefef;
  width: 100%;
  position: relative;
  height: 100%;
  position: fixed;
}

.login .login_head {
  padding: 40px 0;
  background: #fff;
  border-bottom: 1px solid #dadada;
  text-align: center;
}
.login .login_head .logo {
  font-size: 24px;
  font-family: 'notokr-medium';
  letter-spacing: -1px;
  vertical-align: middle;
}
.login .login_head .logo span {
  margin-left: 10px;
}

.login .login_title {
  padding: 50px 0;
  text-align: center;
}
.login .login_title h3 {
  font-size: 32px;
  line-height: 32px;
  font-family: 'notokr-medium';
}
.login .login_title p {
  margin-top: 20px;
  color: #888;
}

.login .login_box {
  margin: 0px auto;
  display: block;
  max-width: 520px;
  background: #fff;
  padding: 40px;
}
.login .login_box ul li {
  margin-bottom: 10px;
}
.login .login_box p {
  text-align: center;
  border-top: 1px solid #e2e2e2;
  padding: 20px 0;
  margin-top: 50px;
  color: #aaa;
}

.login .login_box .user_select {
  text-align: center;
  padding-bottom: 30px;
}
.login .login_box .user_select > div {
  margin: 0 10px;
}
</style>
