<template>
  <div class="sales_wr contents">
    <div class="real_time_list">
      <search-box
        :start="query.start"
        :end="query.end"
        @update:start="query.start = $event"
        @update:end="query.end = $event"
        @update:machine="query.machine = $event"
        @update:search="console.log($event)"
      />
      <sales-table :page="query.page" :totalCount="filterList.length" :list="list"/>

      <div class="bottom_btns">
        <div class="paging_wr">
          <span v-show="query.page > 1" @click="query.page -= 1">
            <i class="ui angle left icon"></i>
          </span>
          <span
            v-for="(c, index) in pageCount"
            :key="index"
            @click="query.page = c"
            :class="{ active: query.page === c }"
          >{{ c }}</span>
          <span v-show="query.page < pageCount" @click="query.page += 1">
            <i class="ui angle right icon"></i>
          </span>
        </div>
      </div>
    </div>
    <!-- cost_list -->
  </div>
</template>
<script>
import moment from 'moment';
import { mapActions } from 'vuex';
import SearchBox from './query.vue';
import SalesTable from './table.vue';

export default {
  components: {
    SearchBox,
    SalesTable,
  },
  data() {
    return {
      query: {
        start: new Date(),
        end: new Date(),
        page: 1,
        machine: '',
      },
      data: [],
    };
  },
  mounted() {
    this.gettingData();
  },
  watch: {
    // eslint-disable-next-line func-names
    'query.start': function (newValue) {
      if (moment(newValue) <= moment(this.query.end)) {
        this.gettingData();
      }
    },
    // eslint-disable-next-line func-names
    'query.end': function (newValue) {
      if (moment(newValue) >= moment(this.query.start)) {
        this.gettingData();
      }
    },
  },
  computed: {
    list() {
      return this.filterList.slice(
        (this.query.page - 1) * 20,
        this.query.page * 20,
      );
    },
    pageCount() {
      return Math.ceil(this.filterList.length / 20);
    },

    filterList() {
      const machineId = this.query.machine;
      return this.data.filter((v) => {
        if (machineId === '') return true;

        return machineId === v.mac;
      });
    },
  },
  methods: {
    ...mapActions(['salesData']),

    gettingData() {
      const self = this;
      const start = moment(this.query.start)
        .add(-1, 'day')
        .toDate();
      const end = moment(this.query.end)
        .add(1, 'day')
        .toDate();
      const query = { start, end };
      this.data = [];

      this.salesData(query).then((data) => {
        self.data = data;
      });
    },
  },
};
</script>
