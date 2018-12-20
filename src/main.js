import 'semantic-ui-css/semantic.min.css';
import SemanticVue from 'semantic-ui-vue';
import VueMoment from 'vue-moment';
import VueLodash from 'vue-lodash';
import VeeValidate from 'vee-validate';
import validateKo from 'vee-validate/dist/locale/ko';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

const validateConfig = {
  locale: 'ko',
  dictionary: {
    validateKo,
  },
};

Vue.use(SemanticVue);
Vue.use(VeeValidate, validateConfig);
Vue.use(VueLodash);
Vue.use(VueMoment);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
