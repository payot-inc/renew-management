import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

const HOST = 'http://api.payot-coin.com';

export default {
  // 업체 로그인 하기
  login({ commit }, { email, password }) {
    const url = `${HOST}/company/login`;
    return axios.post(url, { email, password }).then(({ data }) => {
      commit('setMachines', data.machines);
      delete data.machines;
      commit('setCompany', data);

      return data;
    });
  },

  // 장비에게 클레임 처리
  claim({ state }, { machine, price, reason }) {
    const id = machine.id;
    const url = `${HOST}/event/machine/${id}/claim`;
    const input = { amount: price, reason };

    return axios.post(url, input).then(({ data }) => data);
  },

  // 사용자에게 문자 발송
  sms({ state }, { phoneNumber, title, message }) {},

  smsBulk({ state }, { phoneNumber, title, message }) {},

  smsList({ state }) {
    const franchiseId = state.company.franchise.id;
    const url = `${HOST}/sms/list/franchise/${franchiseId}`;

    return axios.get(url).then(({ data }) => data);
  },

  // 매출정보 가져오기
  salesData({ state }, { start, end }) {
    if (_.isUndefined(state.company)) return Promise.reject(new Error('로그인을 먼저 시도해 주세요'));

    // eslint-disable-next-line prefer-destructuring
    const id = state.company.id;
    const startDate = moment(start)
      .startOf('day')
      .format('YYYY-MM-DD');
    const endDate = moment(end)
      .endOf('day')
      .format('YYYY-MM-DD');
    const url = `${HOST}/payments/company/${id}?start=${startDate}&end=${endDate}`;

    return axios.get(url).then(({ data }) => data);
  },

  // 장치정보 가져오기
  machinesData({ state, commit }) {
    // eslint-disable-next-line prefer-destructuring
    const id = state.company.id;
    return axios.get(`${HOST}/company/${id}`).then(({ data }) => {
      commit('setMachines', data.machines);

      return data.machines;
    });
  },

  // 유지비 정보 가져오기
  managementData({ state }, { start, end }) {
    // eslint-disable-next-line prefer-destructuring
    const id = state.company.id;
    const startDate = moment(start)
      .startOf('year')
      .format('YYYY-MM-DD');
    const endDate = moment(end)
      .endOf('year')
      .format('YYYY-MM-DD');

    const url = `${HOST}/maintenances/company/${id}?start=${startDate}&end=${endDate}`;

    return axios.get(url).then(({ data }) => data);
  },

  // 유지비 정보 추가
  appendManagementData({ state }, { input }) {
    const companyId = state.company.id;
    const franchiseId = state.company.franchise.id;
    const inputData = _.clone(input);

    // eslint-disable-next-line no-param-reassign
    inputData.companyId = companyId;
    // eslint-disable-next-line no-param-reassign
    inputData.franchiseId = franchiseId;

    console.log(inputData);

    const url = `${HOST}/maintenances`;
    return axios.post(url, inputData).then(({ data }) => data);
  },

  // 

  // 가입된 사용자 조회
  usersData({ state }) {
    // eslint-disable-next-line prefer-destructuring
    const id = state.company.id;
    const url = `${HOST}/users/company/${id}`;

    return axios.get(url).then(({ data }) => data);
  },

  // 사용자 삭제
  deleteUser(a, { user }) {
    const url = `${HOST}/users/${user.id}`;

    return axios.delete(url).then(({ data }) => data);
  },

  // 장치에 서비스 추가
  serviceAdd(a, { machine, input }) {
    const machineId = machine.id;
    const url = `${HOST}/service/machine/${machineId}`;

    return axios.post(url, input).then(({ data }) => data);
  },
  // 서비스 업데이트
  updateService(a, { service }) {
    const url = `${HOST}/service/${service.id}`;

    return axios.put(url, _.pickBy(service, _.identity)).then(({ data }) => data);
  },

  // 장치 서비스 삭제
  deleteService(a, { service }) {
    const url = `${HOST}/service/${service.id}`;

    return axios.delete(url).then(({ data }) => data);
  },
};
