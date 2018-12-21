<template>
  <div id="header">
    <div class="top_hd">
      <div class="logo">
        <a>
          <img src="@/assets/img/logo_ww.png">
        </a>
      </div>
      <div class="gnb">
        <p>
          <strong>{{ company.owner.name }}</strong>점주님 안녕하세요
        </p>
        <a class="logout" name="logout" @click="show = true">로그아웃</a>
      </div>
    </div>

    <sui-modal size="mini" v-model="show">
      <sui-modal-header>로그아웃</sui-modal-header>

      <sui-modal-content>정말 로그아웃 하시겠습니까?</sui-modal-content>

      <sui-modal-actions>
        <sui-button negative @click="setLogout()">로그아웃</sui-button>
        <sui-button @click="show = false">취소</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState(['company']),
  },

  methods: {
    ...mapMutations(['logout']),

    setLogout() {
      console.log('logout');
      this.logout();
      this.$router.push('/login');
    },
  },
};
</script>
