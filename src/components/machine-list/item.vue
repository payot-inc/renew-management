<template>
  <tr class="item">
    <td class="t1">{{ item.type }}</td>
    <td class="t2">{{ item.name }}</td>
    <td class="t3">{{ item.size }}</td>
    <td class="t4">{{ item.createdAt | convertDate }}</td>
    <td class="t5">{{ item.mac }}</td>
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
export default {
  props: ['item'],
  filters: {
    convertDate(date) {
      if (!this.moment.isValid(date)) return '';

      return this.moment(date).format('YYYY-MM-DD');
    },
  },
};
</script>
