<template>
  <div class="sms_use">
    <table class="v_table">
      <tbody>
        <tr>
          <td class="t1">받을 대상</td>
          <td class="t2">
            <div class="ui checkbox">
              <sui-checkbox v-model="all">회원전체</sui-checkbox>
            </div>
          </td>
        </tr>
        <tr>
          <td class="t1">문자 내용입력</td>
          <td class="t2">
            <textarea id="fixed" placeholder="최대 80자까지 작성이 가능합니다"></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="bottom_btns">
      <a href="#" class="color_bt">문자 전송하기</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all: false,
    };
  },
};
</script>


<style scoped>
#fixed {
  min-height: 400px;
  max-height: 400px;
}
</style>
