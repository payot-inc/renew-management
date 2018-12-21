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
    <td class="t8">
      <strong>{{ sale.amount | priceFormat }}</strong>
    </td>
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
      return Number(number).toLocaleString();
    },
  },
};
</script>
