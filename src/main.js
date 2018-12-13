import 'semantic-ui-css/semantic.min.css';
import SemanticVue from 'semantic-ui-vue';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

Vue.use(SemanticVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
