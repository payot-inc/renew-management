export default {
  // 업체정보 바인딩
  setCompany(state, data) {
    // eslint-disable-next-line no-param-reassign
    state.company = data;
  },

  // 장비정보 바인딩
  setMachines(state, data) {
    // eslint-disable-next-line no-param-reassign
    state.machines = data;
  },

  // 업체 유지비 정보 바인딩
  setManagement(state, data) {
    // eslint-disable-next-line no-param-reassign
    state.management = data;
  },

  // 업체 관리정보(유지비용) 입력시 자료 동기화
  addManagement(state, data) {
    state.management.push(data);
  },

  logout(state) {
    // eslint-disable-next-line no-param-reassign
    state.company = {};
    // eslint-disable-next-line no-param-reassign
    state.machines = [];
  },
};
