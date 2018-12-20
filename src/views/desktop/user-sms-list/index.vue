<template>
  <div class="user_wr contents">
    <info/>

    <div class="sms_use_list">
      <data-table :data="list"/>

      <div class="bottom_btns">
        <div class="paging_wr">
          <span class="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>
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
    };
  },
  mounted() {
    this.gettingData();
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
