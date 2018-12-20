<template>
  <tr>
    <td>{{ number }}</td>
    <td>
      <strong>{{ sale.payAt | moment('YYYY-MM-DD') }}</strong>
      <span>{{ sale.payAt | moment('hh:mm:ss') }}</span>
    </td>
    <td>
      <strong>{{ machine.name }}</strong>
      <span class="eq_info">타입: {{ machine.type }} / 용량 {{ machine.size }}</span>
    </td>
    <td>
      <strong>01 진짜 잘빠리는 세탁</strong>
      <span>50분</span>
    </td>
    <td class="t5">010-8525-4561</td>
    <td class="t6">1,200</td>
    <td class="t7">500</td>
    <td class="t8">
      <strong>{{ sale.amount | priceFormat }}</strong>
    </td>
    <td class="t9">신용카드</td>
  </tr>
</template>

<script>
export default {
  props: ['number', 'sale'],
  computed: {
    machine() {
      return this.$store.getters.getMachine(this.sale.mac);
    },
  },
  filters: {
    priceFormat(number) {
      return number.toLocaleString();
    },
  },
};
</script>
