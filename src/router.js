import Vue from 'vue';
import Router from 'vue-router';
import { isMobile } from 'mobile-device-detect';

import Layout from '@/components/layout/layout.vue';

import Calendar from '@/views/desktop/calendar/index.vue';
import MachineList from '@/views/desktop/machine-list/index.vue';
// import MachineAdd from '@/views/desktop/machine-add/index.vue';
import MachineControl from '@/views/desktop/machine-control/index.vue';
import MachineService from '@/views/desktop/machine-service/index.vue';
import SalesList from '@/views/desktop/sales-list/index.vue';
import SalesRangeGraph from '@/views/desktop/sales-range-graph/index.vue';
import SalesMachine from '@/views/desktop/sales-machine/index.vue';
import ManagementList from '@/views/desktop/management-list/index.vue';
import ManagementAdd from '@/views/desktop/management-add/index.vue';
import UserList from '@/views/desktop/user-list/index.vue';
import UserSMS from '@/views/desktop/user-sms/index.vue';
import UserSMSList from '@/views/desktop/user-sms-list/index.vue';
import UserPointList from '@/views/desktop/user-point-use/index.vue';
import UserPointAdd from '@/views/desktop/user-point-add/index.vue';
import UserPointAddList from '@/views/desktop/user-point-add-list/index.vue';

function requireAuth(to, from, next) {
  return '';
}

function checkMobile(to, from, next) {
  if (isMobile) {
    console.log('모바일 입니다');
  } else {
    console.log('데스크탑 입니다', to, from);
  }

  next();
}

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      // eslint-disable-next-line global-require
      component: require('@/views/login.vue').default,
    },
    {
      path: '/',
      name: 'root',
      component: Layout,
      redirect: 'machine-list',
      beforeEnter: checkMobile,
      children: [
        {
          name: 'calendar',
          path: '/calendar',
          component: Calendar,
        },
        {
          name: 'machine-list',
          path: '/machine-list',
          component: MachineList,
        },
        // {
        //   name: 'machine-add',
        //   path: '/machine-add',
        //   component: MachineAdd,
        // },
        {
          name: 'machine-control',
          path: '/machine-control',
          component: MachineControl,
        },
        {
          name: 'machine-service',
          path: '/machine-service',
          component: MachineService,
        },
        {
          name: 'sales-list',
          path: '/sales-list',
          component: SalesList,
        },
        {
          name: 'sales-range-graph',
          path: '/sales-range-graph',
          component: SalesRangeGraph,
        },
        {
          name: 'sales-machine',
          path: '/sales-machine',
          component: SalesMachine,
        },
        {
          name: 'management-list',
          path: '/management-list',
          component: ManagementList,
        },
        {
          name: 'management-add',
          path: '/management-add',
          component: ManagementAdd,
        },
        {
          name: 'user-list',
          path: '/user-list',
          component: UserList,
        },
        {
          name: 'user-sms',
          path: '/user-sms',
          component: UserSMS,
        },
        {
          name: 'user-sms-list',
          path: '/user-sms-list',
          component: UserSMSList,
        },
        {
          name: 'user-point-use',
          path: '/user-point-use',
          component: UserPointList,
        },
        {
          name: 'user-point-add',
          path: '/user-point-add',
          component: UserPointAdd,
        },
        {
          name: 'user-point-add-list',
          path: '/user-point-add-list',
          component: UserPointAddList,
        },
      ],
    },

    {
      path: '/m',
    },
  ],
});
