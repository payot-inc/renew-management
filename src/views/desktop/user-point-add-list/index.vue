<template>
  <div class="user_wr contents">
    <div class="point_add_list">
      <table class="h_table">
        <thead>
          <tr class="hd">
            <td class="w_2x">번호</td>
            <td class="w_4x">지급한 날짜</td>
            <td class="t2">지급한 사유</td>
            <td class="w_4x">지급한 포인트</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>번호</td>
            <td>018-11-10:11:24:03</td>
            <td class="align_l">기계 오작동으로 인한 포인트 지급</td>
            <td>
              <strong>1,000</strong> Point
            </td>
          </tr>
          <tr>
            <td class="no_item" colspan="4">지급된 포인트가 없습니다</td>
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
        <router-link to="/user-point-add">포인트 적립 바로가기</router-link>
      </div>
    </div>
    <!-- cost_list -->
  </div>
</template>
