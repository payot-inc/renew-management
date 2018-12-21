<template>
  <div class="sales_wr contents">
    <div class="real_time_list">
      <query-form
        :start="query.start"
        :end="query.end"
        @update:start="query.start = $event"
        @update:end="query.end = $event"
        @update:search="console.log($event)"
      />
      <data-table :page="query.page" :totalCount="data.length" :list="data"/>

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
import { mapActions } from 'vuex';
import moment from 'moment';
import { sortBy } from 'lodash';
import QueryForm from './query.vue';
import DataTable from './table.vue';

export default {
  components: {
    QueryForm,
    DataTable,
  },
  data() {
    return {
      data: [],
      query: {
        start: new Date(),
        end: new Date(),
        page: 1,
      },
    };
  },
  mounted() {
    this.gettingData();
  },
  computed: {
    pageCount() {
      return Math.ceil(this.data.length / 20);
    },
  },
  watch: {
    // eslint-disable-next-line func-names
    'query.start': function(newValue) {
      if (moment(newValue) < moment(this.query.end)) {
        this.gettingData();
      }
    },

    // eslint-disable-next-line func-names
    'query.end': function(newValue) {
      if (moment(newValue) > moment(this.query.start)) {
        this.gettingData();
      }
    },
  },
  methods: {
    ...mapActions(['claimList']),

    gettingData() {
      const self = this;

      this.claimList({ start: this.query.start, end: this.query.end }).then(
        data => {
          self.data = sortBy(data, i => i.createdAt).reverse();
        }
      );
    },
  },
};
</script>
