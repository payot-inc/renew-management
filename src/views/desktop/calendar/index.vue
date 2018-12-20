<template>
  <div class="main contents">
    <div class="ui stackble doubling column grid">
      <div class="twelve wide column">
        <div class="calendar_wr">
          <div class="calendar_top">
            <a class="arr" @click="changeMonth(-1)">
              <i class="ui angle left icon"></i>
            </a>
            <a class="num">{{ selected | formatDate }}</a>
            <a class="arr" @click="changeMonth(1)">
              <i class="ui angle right icon"></i>
            </a>
          </div>

          <!-- calendar -->
          <calendar :date="selected" :data="data"/>
        </div>
        <!-- calendar_wr -->
      </div>
      <div class="four wide column">
        <h4>
          <i class="ui calendar outline icon"></i> 주요현황
        </h4>
        <sales-count :date="selected" :data="data"/>

        <div class="sales_state2">
          <h4>
            <i class="ui chart line icon"></i>이번달 매출현황
          </h4>
          <analyst :data="data"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions } from 'vuex';
import Calendar from './calendar.vue';
import SalesCount from './month.vue';
import Analyst from './total.vue';

export default {
  components: {
    Calendar,
    SalesCount,
    Analyst,
  },
  data() {
    return {
      data: [],
      selected: new Date(),
    };
  },
  mounted() {
    this.getSalesData();
  },
  watch: {
    selected() {
      this.getSalesData();
    },
  },
  methods: {
    ...mapActions(['salesData']),

    getSalesData() {
      const self = this;
      const start = moment(this.selected)
        .startOf('month')
        .format('YYYY-MM-DD');

      const end = moment(this.selected)
        .add(1, 'month')
        .startOf('month')
        .format('YYYY-MM-DD');

      this.data = [];
      // eslint-disable-next-line no-return-assign
      this.salesData({ start, end }).then(data => (self.data = data));
    },

    changeMonth(month) {
      const selectedMonth = moment(this.selected).add(month, 'month');

      if (moment() - selectedMonth < 0) return;

      this.selected = selectedMonth.toDate();
    },
  },
  filters: {
    formatDate(date) {
      return moment(date).format('YYYY-MM');
    },
  },
};
</script>
