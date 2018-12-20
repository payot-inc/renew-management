<template>
  <tr>
    <td>{{ number }}</td>
    <td>{{ machine.name }}</td>
    <td>{{ machine.type }}</td>
    <td>{{ totalRunning }}</td>
    <td>{{ dayAverage | convertPrice }}원</td>
    <td>{{ dayAverage * 30 | convertPrice }}원</td>
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
      if (this.sales.length === 0) return 0;
      const start = this.minDay;
      const end = this.maxDay;

      return moment(end).diff(moment(start), 'day');
    },

    totalMonth() {
      if (this.sales.length === 0) return 0;
      const start = this.minDay;
      const end = this.maxDay;

      return moment(end).diff(moment(start), 'month');
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
      return Math.floor(this.totalSales / this.totalDay);
    },
  },
  filters: {
    convertPrice(price) {
      return price.toLocaleString();
    },
  },
};
</script>
