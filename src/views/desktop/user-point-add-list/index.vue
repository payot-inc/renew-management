<template>
  <div class="user_wr contents">
    <div class="point_add_list">
      <table class="h_table">
        <thead>
          <tr class="hd">
            <td class="w_2x">지급일자</td>
            <td class="t2">지급한 사유</td>
            <td class="t2">1인당 지급 포인트</td>
            <td class="t2">지급된 회원수</td>
            <td class="t2">총 지급 포인트</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in data" :key="index">
            <td>{{ value.createdAt | moment('YYYY-MM-DD') }}</td>
            <td>{{ value.notice }}</td>
            <td>{{ value.point.toLocaleString() }} P</td>
            <td>{{ value.manyPerson.toLocaleString() }}명</td>
            <td>{{ (value.manyPerson * value.point).toLocaleString() }} P</td>
          </tr>
          <tr v-if="data.length === 0">
            <td class="no_item" colspan="6">지급된 포인트가 없습니다</td>
          </tr>
        </tbody>
      </table>

      <div class="bottom_btns">
        <div class="paging_wr">
          <!-- <span class="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>
            <i class="ui angle right icon"></i>
          </span>-->
        </div>
        <router-link to="/user-point-add">포인트 적립</router-link>
      </div>
    </div>
    <!-- cost_list -->
  </div>
</template>

<script>
import { sortBy } from 'lodash';
import { mapActions } from 'vuex';
import moment from 'moment';

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.gettingData();
  },
  methods: {
    ...mapActions(['addPointList']),

    gettingData() {
      const self = this;

      const start = moment()
        .startOf('year')
        .toDate();
      const end = moment()
        .endOf('year')
        .toDate();

      this.addPointList({ start, end }).then((data) => {
        self.data = sortBy(data, data.createdAt).reverse();
      });
    },
  },
};
</script>
