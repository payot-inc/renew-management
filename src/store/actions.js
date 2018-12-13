import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

const HOST = 'http://api.payot-coin.com';

export default {
  // 업체 로그인 하기
  login({ commit }, { email, password }) {
    const url = `${HOST}/company/login`;
    return axios.post(url, { email, password }).then(({ data }) => {
      commit('setCompany', data);

      return data;
    });
  },

  // 장비에게 클레임 처리
  claim({ state }, { machine, price, reason }) {
    const url = `${HOST}/event/claim`;
  },

  // 사용자에게 문자 발송
  sms({ getter }, { phoneNumbers, title, message }) {},

  // 매출정보 가져오기
  salesData({ getter }, { start, end }) {
    if (_.isUndefined(state.company))
      return Promise.reject(new Error('로그인을 먼저 시도해 주세요'));

    const url = `${HOST}/sales/company/${id}?start=${startDate}&end=${endDate}`;
    const id = getter('getId');

    const startDate = moment(start)
      .startOf('day')
      .format('YYYY-MM-DD');

    const endDate = moment(end)
      .endOf('day')
      .format('YYYY-MM-DD');

    return axios.get(url).then(({ data }) => data);
  },

  // 유지비 정보 가져오기
  managementData({ getter, commit }) {
    const id = getter('getId');
    const url = `${HOST}/${id}`;
    return axios.get(url).then(({ data }) => {
      commit();
    });
  },

  appendManagementData({ commit }, data) {
    return axios.post().then(({ data }) => {
      commit('addManagement', data);

      return data;
    });
  },
};
