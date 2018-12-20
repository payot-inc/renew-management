<template>
  <div class="sales_wr contents">
    <div class="real_time_list">
      <search-box
        :start="query.start"
        :end="query.end"
        @update:start="query.start = $event"
        @update:end="query.end = $event"
        @update:search="console.log($event)"
      />
      <sales-table :list="list"/>

      <div class="bottom_btns">
        <div class="paging_wr">
          <span
            v-for="(c, index) in pageCount"
            :key="index"
            @click="query.page = c"
            :class="{ active: query.page === c }"
          >{{ c }}</span>
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
      },
      data: [],
    };
  },
  mounted() {
    this.gettingData();
  },
  computed: {
    list() {
      return this.data.slice((this.query.page - 1) * 20, this.query.page * 20);
    },
    pageCount() {
      return Math.ceil(this.data.length / 20);
    },
  },
  methods: {
    ...mapActions(['salesData']),

    gettingData() {
      console.log('adsfadf');
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
