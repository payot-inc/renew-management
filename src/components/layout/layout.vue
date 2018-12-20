<template>
  <div>
    <header-component/>
    <div id="wrapper">
      <navi-component @navi="navigationPath"/>

      <div id="container">
        <top-navi-component :navi="navigationPath"/>
        <div class="sub_page_title">
          <h2>{{ title }}</h2>
        </div>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './head.vue';
import NaviComponent from './navi.vue';
import TopNaviComponent from './top-navi.vue';

export default {
  components: {
    HeaderComponent,
    NaviComponent,
    TopNaviComponent,
  },
  computed: {
    title() {
      return this.$route.name;
    },
    navigationPath() {
      return ['HOME', '장비관리', '장비목록'];
    },
  },
};
</script>
