<template>
  <tr>
    <td>{{ number }}</td>
    <td>{{ machine.name }}</td>
    <td>{{ machine.type }}</td>
    <td>{{ totalRunning }}</td>
    <td>{{ dayAverage | convertPrice }}원</td>
    <td>{{ total | convertPrice }}원</td>
  </tr>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';

export default {
  props: ['machine', 'sales', 'number'],
  computed: {
    minDay() {
      if (this.sales.length === 0) return '';
      return _.minBy(this.sales, 'payAt').payAt;
    },

    maxDay() {
      if (this.sales.length === 0) return '';
      return _.maxBy(this.sales, 'payAt').payAt;
    },

    totalDay() {
      if (this.sales.length === 0) return 1;
      const start = this.minDay;
      const end = this.maxDay;
      const result = moment(end).diff(moment(start), 'day');

      return result <= 0 ? 1 : result;
    },

    totalSales() {
      if (this.sales.length === 0) return 0;
      return _.sumBy(this.sales, v => Number(v.amount));
    },

    totalRunning() {
      const seconds = Math.floor(
        (this.totalSales / this.machine.serviceAmount)
          * this.machine.serviceRuntimeSec,
      );

      if (seconds === 0) return '동작되지 않음';
      return moment.utc(seconds * 1000).format('hh시간 mm분');
    },

    dayAverage() {
      if (this.sales.length === 0) return 0;
      return Math.ceil(this.totalSales / this.totalDay);
    },

    total() {
      if (this.sales.length === 0) return 0;
      return _.sumBy(this.sales, i => Number(i.amount));
    },
  },
  filters: {
    convertPrice(price) {
      return price.toLocaleString();
    },
  },
};
</script>
