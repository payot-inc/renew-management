<template>
  <table class="h_table">
    <thead>
      <tr>
        <td class="w_2x">번호</td>
        <td class="w_4x">사용한 날짜</td>
        <td>보낸 내용</td>
        <td class="w_3x">보낸 사용자</td>
        <td class="w_2x">보낸 총 건수</td>
        <td class="w_4x">이번달 누적 사용건수</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>12345</td>
        <td>{{ item.createdAt | moment('YYYY년 MM월 DD일 hh시 mm분') }}</td>
        <td class="align_l">{{ item.message }}</td>
        <td>{{ item.sender === 'franchise' ? '더런드리' : '점주' }}</td>
        <td>{{ item.count }}건</td>
        <td>3,415건</td>
      </tr>
      <tr v-if="data.length === 0">
        <td class="no_item" colspan="6">문자를 보낸 데이터가 없습니다</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['data'],
};
</script>
