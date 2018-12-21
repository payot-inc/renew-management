<template>
  <tr>
    <td>{{ number }}</td>
    <td>{{ user.phone }}</td>
    <td>{{ user.createdAt | moment('YYYY-MM-DD')}}</td>
    <td>{{ user.point | convertPrice }}</td>
    <!-- <td>{{ user.point | convertPrice }}</td> -->
    <td>
      <a @click="$emit('update:user', user)" class="in_btn">회원 삭제</a>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['number', 'user'],
  filters: {
    convertPrice(number) {
      return Number(number).toLocaleString();
    },
  },
};
</script>
