<template>
  <div>
    <g-chart type="ColumnChart" :data="row" :options="options"/>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import { mapActions } from 'vuex';
import moment from 'moment';
import _ from 'lodash';

export default {
  props: ['date'],
  components: {
    GChart,
  },
  data() {
    return {
      data: [],
      options: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
      },
    };
  },
  mounted() {
    this.gettingData();
  },
  watch: {
    date() {
      this.data = [];
      this.gettingData();
    },
  },
  computed: {
    row() {
      const group = _.groupBy(this.data, i => moment(i.payAt).hour());
      const title = ['시간', '수익'];
      const result = [];
      result.push(title);

      _.times(24, (i) => {
        if (!group[i]) {
          result.push([`${i}시`, 0]);
          return true;
        }

        result.push([`${i}시`, _.sumBy(group[i], v => Number(v.amount))]);
        return true;
      });

      return result;
    },
  },
  methods: {
    ...mapActions(['salesData']),

    gettingData() {
      const self = this;
      const start = moment(this.date)
        .startOf('day')
        .toDate();
      const end = moment(this.date)
        .startOf('day')
        .add(1, 'day')
        .toDate();

      this.salesData({ start, end }).then((data) => {
        self.data = data;
      });
    },
  },
};
</script>
