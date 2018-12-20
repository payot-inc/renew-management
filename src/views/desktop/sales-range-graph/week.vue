<template>
  <div>
    <g-chart type="ColumnChart" :data="row" :options="options"/>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import _ from 'lodash';
import moment from 'moment';
import { mapActions } from 'vuex';

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
      const title = ['요일', '수익'];
      const weeks = ['일', '월', '화', '수', '목', '금', '토'];
      const group = _.groupBy(this.data, i => moment(i.payAt).weekday());
      const result = [];
      result.push(title);

      _.times(7, (i) => {
        if (!group[i]) {
          result.push([`${weeks[i]}`, 0]);
          return true;
        }

        result.push([`${weeks[i]}`, _.sumBy(group[i], v => Number(v.amount))]);
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
        .startOf('week')
        .toDate();
      const end = moment(this.date)
        .endOf('week')
        .add(1, 'day')
        .toDate();

      this.salesData({ start, end }).then((data) => {
        self.data = data;
      });
    },
  },
};
</script>
