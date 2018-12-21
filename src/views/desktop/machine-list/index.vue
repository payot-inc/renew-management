<template>
  <div class="eq_wr contents">
    <div class="eq_list">
      <list-table/>

      <div class="bottom_btns">
        <router-link to="/machine-control" class="eq_control_bt">
          <i class="ui keyboard outline icon"></i> 장비원격제어
        </router-link>

        <router-link to="/machine-service">
          <i class="ui barcode icon"></i> 장비별 상품관리
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ListTable from './table.vue';

export default {
  components: {
    ListTable,
  },
};
</script>
