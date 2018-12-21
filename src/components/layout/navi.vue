<template>
  <div class="left_hd">
    <div class="hd_tit">
      <strong>
        <i class="ui cog icon"></i>
      </strong>
      <span>매장관리 시스템</span>
    </div>
    <div class="menu">
      <dl>
        <dt>매출·비용관리</dt>
        <dd>
          <ul>
            <li>
              <router-link to="/calendar">월 매출현황</router-link>
            </li>
            <li>
              <router-link to="/sales-list">실시간 매출현황</router-link>
            </li>
            <li>
              <router-link to="/sales-range-graph">기간별 매출 그래프</router-link>
            </li>
            <li>
              <router-link to="/sales-machine">장비별 매출통계</router-link>
            </li>
            <li>
              <router-link to="/management-list">비용사용 현황</router-link>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>장비관리</dt>
        <dd>
          <ul>
            <li>
              <router-link to="/machine-list">장비목록</router-link>
            </li>
            <li>
              <router-link to="/machine-control">장비원격제어</router-link>
            </li>
            <li>
              <router-link to="/machine-control-list">장비원격제어 목록</router-link>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>상품관리</dt>
        <dd>
          <ul>
            <li>
              <router-link to="/machine-service">장비별 상품관리</router-link>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>회원관리</dt>
        <dd>
          <ul>
            <li>
              <router-link to="/user-list">회원 목록</router-link>
            </li>
            <li>
              <router-link to="/user-point-add">포인트 적립</router-link>
            </li>
            <li>
              <router-link to="/user-point-add-list">포인트 적립내역</router-link>
            </li>
            <li>
              <router-link to="/user-sms">SMS 문자전송</router-link>
            </li>
            <li>
              <router-link to="/user-sms-list">SMS 전송내역</router-link>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['routePath']),
  },
};
</script>
