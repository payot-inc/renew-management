<template>
  <table cellpadding="0" cellspacing="0" v-if="data">
    <tbody>
      <tr class="r1">
        <td class="t1">총 매출</td>
        <td class="t2">
          <strong class="num">{{ total | numberFormat }}</strong>
          <span>원</span>
        </td>
      </tr>
      <tr class="r2">
        <td class="t1">평균매출</td>
        <td class="t2">
          <strong class="num">{{ average | numberFormat }}</strong>
          <span>원</span>
        </td>
      </tr>
      <tr class="r3">
        <td class="t1">최대매출일</td>
        <td class="t2">
          <strong v-if="max.day">{{ max.day }}일</strong>
          <span v-if="max.price">{{ max.price | numberFormat }}원</span>
        </td>
      </tr>
      <tr class="r4">
        <td class="t1">최소매출일</td>
        <td class="t2">
          <strong v-if="min.day">{{ min.day }}일</strong>
          <span v-if="min.price">{{ min.price | numberFormat }}원</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';

export default {
  props: ['data'],
  data() {
    return {
      max: {},
      min: {},
    };
  },
  computed: {
    total() {
      if (this.data === undefined || this.data.length === 0) return 0;

      return _.sumBy(this.data, v => Number(v.amount));
    },
    average() {
      if (this.data === undefined || this.data.length === 0) return 0;
      const maxDay = _.maxBy(this.data, 'payAt').payAt;
      const duration = moment(maxDay).diff(
        moment(maxDay).startOf('month'),
        'days',
      );

      // eslint-disable-next-line consistent-return
      return Math.ceil(this.total / (duration + 1));
    },
  },
  watch: {
    data() {
      this.sumByDays();
    },
  },
  methods: {
    sumByDays() {
      const array = [];

      _.times(moment(this.date).daysInMonth(), (i) => {
        const filter = item => moment(item.payAt).date() === i + 1;

        const items = this.data.filter(filter);
        const sum = _.sumBy(items, value => Number(value.amount));

        array.push({ day: i + 1, price: sum });
      });

      this.max = _.maxBy(array, 'price');
      if (array.length !== 0) {
        this.min = _.minBy(array.filter(v => v.price !== 0), 'price');
      }

      return array;
    },
    maxFilter(day) {
      if (day === undefined || !(day instanceof Number)) return false;
      if (!this.prices[day - 1]) return false;
      return this.maxDay.day === day;
    },
  },
  filters: {
    numberFormat(number) {
      return number.toLocaleString();
    },
  },
};
</script>
