<template>
  <div>
    <g-chart type="ColumnChart" :data="row" :options="options"/>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import { mapActions } from 'vuex';
import _ from 'lodash';
import moment from 'moment';

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
      const group = _.groupBy(this.data, i => moment(i.payAt).date());
      // const title = _.times(moment(this.date).daysInMonth(), i => i + 1);
      const title = ['일자', '수익'];

      const result = [];
      result.push(title);

      _.times(moment(this.date).daysInMonth(), i => {
        if (!group[`${i + 1}`]) {
          result.push([`${i + 1}일`, 0]);
          return true;
        }
        result.push([
          `${i + 1}일`,
          _.sumBy(group[`${i + 1}`], p => Number(p.amount)),
        ]);

        return true;
      });

      return result;
    },
  },
  watch: {
    date() {
      this.gettingData();
    },
  },
  methods: {
    ...mapActions(['salesData']),

    gettingData() {
      const self = this;
      const start = moment(this.date)
        .startOf('month')
        .toDate();
      const end = moment(this.date)
        .endOf('month')
        .add(1, 'day')
        .toDate();

      this.salesData({ start, end }).then(data => {
        self.data = data;
      });
    },
  },
};
</script>
