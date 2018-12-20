<template>
  <tr class="item">
    <td class="t1">{{ machine.name }}</td>
    <td class="t2">{{ machine.type }}</td>
    <td class="t3">{{ machine.size }}</td>
    <td class="t4">{{ machine.installAt | convertDate }}</td>
    <td class="t5">{{ machine.mac }}</td>
    <td class="t6">서비스가능</td>
    <td class="t7">
      <div class="ui toggle checkbox">
        <input readonly="readonly" tabindex="0" type="checkbox" class="hidden">
        <label></label>
      </div>
    </td>
  </tr>
</template>

<script>
import moment from 'moment';

export default {
  props: ['machine'],
  filters: {
    convertDate(date) {
      if (!moment(date).isValid()) return '';

      return moment(date).format('YYYY-MM-DD');
    },
  },
};
</script>
