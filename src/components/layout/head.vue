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
        <a class="logout">로그아웃</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['company']),
  },

  methods: {
    ...mapMutations(['logout']),
    setLogout() {},
  },
};
</script>
