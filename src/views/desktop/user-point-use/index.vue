<template>
  <div class="user_wr contents">
    <div class="point_use_list">
      <table class="h_table">
        <thead>
          <tr>
            <td class="w_2x">번호</td>
            <td class="w_4x">사용한 날짜</td>
            <td class="w_4x">사용한 회원</td>
            <td class="w_4x">사용한 포인트</td>
            <td class="w_4x">회원의 남은 포인트</td>
            <td>사용한 장비</td>
          </tr>
        </thead>
        <tbody>
          <row/>
          <tr>
            <td class="no_item" colspan="6">포인트가 사용된 데이터가 없습니다</td>
          </tr>
        </tbody>
      </table>

      <div class="bottom_btns">
        <div class="paging_wr">
          <span class="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>
            <i class="ui angle right icon"></i>
          </span>
        </div>
        <a href="#">포인트 적립 바로가기</a>
      </div>
    </div>
    <!-- cost_list -->
  </div>
</template>

<script>
import row from './row.vue';

export default {
  components: {
    row,
  },
};
</script>
