<template>
  <table cellspacing="0" cellpadding="0" class="h_table">
    <thead>
      <tr>
        <td class="t1">장비명</td>
        <td class="t2">타입</td>
        <td class="t3">용량</td>
        <td class="t4">도입시기</td>
        <td class="t5">MAC주소</td>
        <!-- <td class="t6">상태</td>
        <td class="t7">동작</td>-->
      </tr>
    </thead>
    <tbody>
      <row v-for="(m, index) in machines" :key="index" :machine="m"/>

      <tr v-if="machines.length === 0">
        <td colspan="7" class="no_item">
          <i class="ui times circle outline icon"/>
          등록된 장비가 없습니다
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import row from './row.vue';

export default {
  components: {
    row,
  },
  mounted() {
    this.machinesData();
  },
  computed: {
    ...mapState(['machines']),
  },
  methods: {
    ...mapActions(['machinesData']),
  },
};
</script>
