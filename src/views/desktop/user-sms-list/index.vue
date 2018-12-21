<template>
  <div class="user_wr contents">
    <info/>

    <div class="sms_use_list">
      <data-table :data="filterList"/>

      <div class="bottom_btns">
        <div class="paging_wr">
          <span v-show="page.now !== 1" @click="page.now -= 1">
            <i class="ui angle left icon"></i>
          </span>
          <span
            v-for="(key, index) in totalPage"
            :key="index"
            :class="{ active: index + 1 === page.now }"
            @click="page.now = index + 1"
          >{{ index + 1 }}</span>
          <span v-show="page.now !== totalPage" @click="page.now += 1">
            <i class="ui angle right icon"></i>
          </span>
        </div>
        <a href="#">SMS 문자전송</a>
      </div>
    </div>
    <!-- cost_list -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { sortBy } from 'lodash';
import info from '../user-sms/info.vue';
import DataTable from './table.vue';

export default {
  components: {
    info,
    DataTable,
  },
  data() {
    return {
      list: [],
      page: {
        now: 1,
      },
    };
  },
  mounted() {
    this.gettingData();
  },
  computed: {
    filterList() {
      const list = this.list.slice(
        (this.page.now - 1) * 20,
        this.page.now * 20,
      );

      return sortBy(list, 'createdAt').reverse();
    },

    totalPage() {
      return Math.ceil(this.list.length / 20);
    },
  },
  methods: {
    ...mapActions(['smsList']),

    gettingData() {
      const self = this;
      this.smsList().then((data) => {
        self.list = data;
      });
    },
  },
};
</script>
