<template>
  <sui-modal v-model="visible" size="large" class="user_list_pop">
    <sui-modal-header>
      <strong>{{ user.phone }}</strong> 님의 결제내역
    </sui-modal-header>

    <sui-modal-content>
      <div class="list_state">
        <div class="state_nb">
          총 결제건수
          <strong>5</strong>건
        </div>
      </div>
      <table class="h_table">
        <thead>
          <tr class="hd">
            <td class="t1">번호</td>
            <td class="t2">결제일시</td>
            <td class="t3">장비/상품명</td>
            <td class="t4">사용된포인트</td>
            <td class="t5">적립된포인트</td>
            <td class="t6">결제금액</td>
            <td class="t7">결제방법</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="t1">2</td>
            <td class="t2">
              <strong>2018-11-12</strong>
              <span>13:14:32</span>
            </td>
            <td class="t3">
              <strong>A타입세탁기 | 19kg | 세탁기</strong>
              <span>상품명: 01 진짜 잘빨리는 세탁 50분</span>
            </td>
            <td class="t4">0</td>
            <td class="t5">500</td>
            <td class="t6">11,000</td>
            <td class="t7">카드</td>
          </tr>

          <tr>
            <td class="t1">3</td>
            <td class="t2">
              <strong>2018-11-12</strong>
              <span>13:14:32</span>
            </td>
            <td class="t3">
              <strong>A타입세탁기 | 19kg | 세탁기</strong>
              <span>상품명: 01 진짜 잘빨리는 세탁 50분</span>
            </td>
            <td class="t4">0</td>
            <td class="t5">500</td>
            <td class="t6">11,000</td>
            <td class="t7">카드</td>
          </tr>

          <tr>
            <td class="t1">4</td>
            <td class="t2">
              <strong>2018-11-12</strong>
              <span>13:14:32</span>
            </td>
            <td class="t3">
              <strong>A타입세탁기 | 19kg | 세탁기</strong>
              <span>상품명: 01 진짜 잘빨리는 세탁 50분</span>
            </td>
            <td class="t4">0</td>
            <td class="t5">500</td>
            <td class="t6">11,000</td>
            <td class="t7">카드</td>
          </tr>

          <tr>
            <td class="t1">5</td>
            <td class="t2">
              <strong>2018-11-12</strong>
              <span>13:14:32</span>
            </td>
            <td class="t3">
              <strong>A타입세탁기 | 19kg | 세탁기</strong>
              <span>상품명: 01 진짜 잘빨리는 세탁 50분</span>
            </td>
            <td class="t4">0</td>
            <td class="t5">500</td>
            <td class="t6">11,000</td>
            <td class="t7">카드</td>
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
      </div>
    </sui-modal-content>
  </sui-modal>
</template>

<script>
export default {
  props: ['user', 'show'],
  mounted() {
    this.visible = this.show;
  },
  data() {
    return {
      visible: this.show,
    };
  },
  watch: {
    show(newValue) {
      this.visible = newValue;
    },
    visible(newValue) {
      this.$emit('update:show', newValue);
    },
  },
};
</script>
