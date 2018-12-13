import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      component: require('@/components/layout/layout').default,
      redirect: '/calendar',
      children: [
        {
          name: 'calendar',
          path: '/calendar',
          component: require('@/views/calendar').default,
        },
        {
          name: 'machine-list',
          path: '/machine-list',
          component: require('@/views/calendar').default,
        },
        {
          name: 'machine-add',
          path: '/machine-add',
          component: require('@/views/machine-add').default,
        },
      ],
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: require('@/views/calendar.vue').default,
    },
  ],
});
