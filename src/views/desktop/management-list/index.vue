<template>
  <div class="sales_wr contents">
    <div class="cost_list">
      <div class="cost_list_hd">
        <div class="hd_left">
          <a href="#" class="arr" @click="changeMonth(-1)">
            <i class="ui angle left icon"></i>
          </a>
          <a href="#" class="yeal">{{ selected | moment('YYYY')}}</a>
          <a href="#" class="arr" @click="changeMonth(1)">
            <i class="ui angle right icon"></i>
          </a>
        </div>
        <div class="hd_right">
          {{ selected | moment('YYYY') }}년 총 비용합계
          <strong>{{ total.toLocaleString() }}</strong> 원
        </div>
      </div>

      <add-from :year="getSelectYear" @update:insert="updateData()"/>

      <table class="h_table">
        <thead>
          <tr>
            <td class="w_1x">월</td>
            <td class="w_3x">수도세</td>
            <td class="w_3x">전기세</td>
            <td class="w_3x">가스비</td>
            <td class="w_3x">월세</td>
            <td class="w_3x">홍보 및 소모품비</td>
            <td class="w_3x">합계</td>
            <td>입력/수정한날짜</td>
            <td class="w_2x">수정</td>
          </tr>
        </thead>
        <tbody>
          <row v-for="(m, index) in sortedData" :key="index" :data="m"/>

          <tr v-if="data.length === 0">
            <td colspan="9" class="no_item">등록된 운영비용이 없습니다</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import { mapActions } from 'vuex';
import row from './row.vue';
import AddFrom from './form.vue';

export default {
  components: {
    row,
    AddFrom,
  },
  data() {
    return {
      selected: new Date(),
      data: [],
    };
  },
  mounted() {
    this.updateData();
  },
  watch: {
    selected() {
      this.updateData();
    },
  },
  computed: {
    sortedData() {
      return _.sortBy(this.data, 'targetDate');
    },
    startDate() {
      return moment(this.selected)
        .startOf('year')
        .toDate();
    },
    endDate() {
      return moment(this.selected)
        .endOf('year')
        .toDate();
    },
    total() {
      if (this.data.length === 0) return 0;

      const sum = this.data.reduce((acc, item) => {
        const water = Number(item.water);
        const electric = Number(item.electric);
        const gas = Number(item.gas);
        const rant = Number(item.spaceRant);
        const etc = Number(item.etc);

        return acc + water + electric + rant + etc + gas;
      }, 0);

      // return this.data.reduce(reduce, 0);
      return sum;
    },

    getSelectYear() {
      return moment(this.selected).year();
    },
  },
  methods: {
    ...mapActions(['managementData']),
    changeMonth(value) {
      this.selected = moment(this.selected)
        .add(value, 'year')
        .toDate();
    },
    updateData() {
      this.data = [];

      const self = this;
      this.managementData({
        start: this.startDate,
        end: this.endDate,
      }).then((data) => {
        if (!data) self.data = [];
        else self.data = data;
      });
    },
  },
};
</script>
