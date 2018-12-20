<template>
  <table cellpadding="0" cellspacing="0">
    <thead>
      <tr class="hd">
        <td class="t7">일요일</td>
        <td class="t1">월요일</td>
        <td class="t2">화요일</td>
        <td class="t3">수요일</td>
        <td class="t4">목요일</td>
        <td class="t5">금요일</td>
        <td class="t6">토요일</td>
      </tr>
    </thead>
    <tbody>
      <tr class="price_wr" v-for="(week, weekIndex) in totalWeeks()" :key="weekIndex">
        <td
          v-for="(day, dayIndex) in 7"
          :key="dayIndex"
          :class="{ t7: dayIndex === 0, t6: dayIndex === 6 }"
        >
          <dt class="day">{{ getDay(weekIndex, dayIndex + 1) }}</dt>
          <dd v-if="getDay(weekIndex, dayIndex + 1) !== ''">
            <div>
              <span
                v-if="prices[getDay(weekIndex, dayIndex + 1) - 1]"
                class="num price"
              >{{ prices[getDay(weekIndex, dayIndex + 1) - 1].price | convertPrice }}</span>
              <span v-if="maxFilter(getDay(weekIndex, dayIndex + 1))">최고매출</span>
            </div>
          </dd>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import moment from 'moment';
import { times, sumBy, maxBy } from 'lodash';

export default {
  props: ['date', 'data'],
  data() {
    return {
      prices: [],
      maxDay: 0,
    };
  },
  watch: {
    data(newValue) {
      this.prices = [];
      if (newValue === undefined || newValue.length === 0) return;
      this.prices = this.sumByDays();
    },
  },
  computed: {
    // 한달의 주의 갯수
    totalWeek() {
      const startWeek = moment(this.date)
        .startOf('month')
        .weekday();
      const firstDayWeekend = moment(this.date).daysInMonth() + startWeek;

      return { firstDayWeekend, startWeek };
    },
  },
  methods: {
    totalWeeks() {
      const totalDay = moment(this.date).daysInMonth();
      const startweek = moment(this.date)
        .startOf('month')
        .weekday();

      return Math.ceil((totalDay + startweek) / 7);
    },
    getDay(week, day) {
      const inputDay = week * 7 + day;
      const maxDay = moment(this.date).daysInMonth();
      const realDay = moment(this.date)
        .startOf('month')
        .weekday();
      const calc = inputDay - realDay;

      return calc <= 0 || calc > maxDay ? '' : calc;
    },
    sumByDays() {
      const array = [];

      times(moment(this.date).daysInMonth(), (i) => {
        const filter = item => moment(item.payAt).date() === i + 1;

        const items = this.data.filter(filter);
        const sum = sumBy(items, value => Number(value.amount));

        array.push({ day: i + 1, price: sum });
      });

      this.maxDay = maxBy(array, 'price');

      return array;
    },
    maxFilter(day) {
      if (!this.prices[day - 1]) return false;
      return this.maxDay.day === day;
    },
  },
  filters: {
    convertPrice(price) {
      return price === 0 ? '' : price.toLocaleString();
    },
  },
};
</script>
