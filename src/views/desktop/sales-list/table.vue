<template>
  <table class="h_table">
    <thead>
      <tr>
        <td class="w_2x">번호</td>
        <td class="w_3x">결제일시</td>
        <td>장비정보</td>
        <td>상품명</td>
        <td class="w_4x">회원번호</td>
        <td class="w_3x">사용된 포인트</td>
        <td class="w_3x">적립된 포인트</td>
        <td class="w_3x">결제금액</td>
        <td class="w_3x">결제방법</td>
      </tr>
    </thead>
    <tbody>
      <row v-for="(sale, index) in list" :key="index" :sale="sale" :number="list.length - index"/>

      <tr v-if="list.length === 0">
        <td class="no_item" colspan="9">
          <i class="ui times circle outline icon"/>
          현재까지 매출이 없습니다
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import row from './row.vue';

export default {
  props: ['list'],
  components: {
    row,
  },
};
</script>
