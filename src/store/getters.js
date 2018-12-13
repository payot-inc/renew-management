import moment from 'moment';
import _ from 'lodash';

export default {
  // 업체 정보 가져오기
  getCompany({ state }) {
    return state.company;
  },

  // 업체 아이디 가져오기
  getId({ state }) {
    if (_.isUndefined(state.company)) return undefined;
    return state.company.id;
  },

  // 단일 장비 가져오기 (mac주소로 구분하여 장치 가져오기)
  getMachine({ state }, mac) {
    return _.find(state.machines, m => m.mac === mac);
  },

  // 관리정보 특정 월별 가져오기
  getManagementPrice({ state }, date) {
    if (_.isUndefined(state.management)) return undefined;

    const findMonth = moment(date).format('YYYY-MM');

    return _.find(state.management, m => {
      const itemDate = moment(m.updatedAt).format('YYYY-MM');

      return findMonth === itemDate;
    });
  },
};
