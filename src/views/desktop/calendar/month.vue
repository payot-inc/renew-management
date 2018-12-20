<template>
  <div class="sales_state1">
    <table cellpadding="0" cellspacing="0">
      <tbody>
        <tr class="r1">
          <td>
            <strong>{{ date | moment('MM') }}</strong>월 결제건수
          </td>
        </tr>
        <tr class="r2">
          <td class="t1 num">{{ data.length | numberFormat }} 건</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['date', 'data'],
  filters: {
    numberFormat(number) {
      return number.toLocaleString();
    },
  },
};
</script>
