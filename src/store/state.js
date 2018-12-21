export default {
  company: {},
  machines: [],
  users: [],
  routePath: {
    '/machine-list': {
      label: '장비목록',
      path: ['HOME', '장비관리', '장비목록'],
    },
    '/machine-control': {
      label: '장비원격제어',
      path: ['HOME', '장비관리', '장비원격제어'],
    },
    '/machine-control-list': {
      label: '장비원격제어 목록',
      path: ['HOME', '장비관리', '장비원격제어 목록'],
    },
    '/machine-service': {
      label: '장비목록',
      path: ['HOME', '상품관리', '장비별 상품관리'],
    },
    '/calendar': {
      label: '월 매출현황',
      path: ['HOME', '매출·비용관리', '월 매출현황'],
    },
    '/sales-list': {
      label: '실시간 매출현황',
      path: ['HOME', '매출·비용관리', '실시간 매출현황'],
    },
    '/sales-range-graph': {
      label: '장비목록',
      path: ['HOME', '매출·비용관리', '기간별 매출 그래프'],
    },
    '/sales-machine': {
      label: '장비별 매출통계',
      path: ['HOME', '매출·비용관리', '장비별 매출통계'],
    },
    '/management-list': {
      label: '비용사용 현황',
      path: ['HOME', '매출·비용관리', '비용사용 현황'],
    },
    '/user-list': {
      label: '회원 목록',
      path: ['HOME', '회원관리', '회원목록'],
    },
    '/user-sms': {
      label: 'SMS전송',
      path: ['HOME', '회원관리', 'SMS 문자 전송'],
    },
    '/user-sms-list': {
      label: 'SMS전송 내역',
      path: ['HOME', '회원관리', 'SMS전송 내역'],
    },
    '/user-point-add': {
      label: '포인트 적립',
      path: ['HOME', '회원관리', '포인트 적립'],
    },
    '/user-point-add-list': {
      label: '포인트 적립내역',
      path: ['HOME', '회원관리', '포인트 적립내역'],
    },
    '/user-point-use': {
      label: '포인트 사용현황',
      path: ['HOME', '회원관리', '포인트 사용현황'],
    },
  },
};
