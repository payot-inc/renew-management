<template>
  <table class="h_table">
    <thead>
      <tr>
        <td class="w_2x">번호</td>
        <td class="w_3x">원격투입일시</td>
        <td>장비정보</td>
        <td>투입 사유</td>
        <td class="w_3x">원격투입금액</td>
      </tr>
    </thead>
    <tbody>
      <row
        v-for="(data, index) in list"
        :key="index"
        :control="data"
        :number="totalCount - (page - 1) * 20 - index"
      />

      <tr v-if="list.length === 0">
        <td class="no_item" colspan="9">
          <i class="ui times circle outline icon"/>
          원격투입 내역이 없습니다
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import row from './row.vue';

export default {
  props: ['page', 'totalCount', 'list'],
  components: {
    row,
  },
};
</script>
