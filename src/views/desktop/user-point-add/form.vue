<template>
  <div class="point_add">
    <table class="v_table">
      <tbody>
        <tr>
          <td class="t1">적립 대상</td>
          <td class="t2">
            <div class="phone_nb">
              <sui-input :disabled="all"/>-
              <sui-input :disabled="all"/>-
              <sui-input :disabled="all"/>
            </div>
            <div class="ui checkbox">
              <sui-checkbox v-model="all">회원 전체</sui-checkbox>
            </div>
          </td>
        </tr>
        <tr class="point_in">
          <td class="t1">적립 포인트</td>
          <td class="t2">
            <sui-input v-model="input.point" type="number"></sui-input>
          </td>
        </tr>
        <tr>
          <td class="t1">지급 사유</td>
          <td class="t2">
            <textarea v-model="input.reason"></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="bottom_btns">
      <sui-button @click="showPointAddModal()">포인트 지급하기</sui-button>
    </div>

    <sui-modal v-model="modal.point.show">
      <sui-modal-header>포인트 지급</sui-modal-header>

      <sui-modal-content>{{ input.point }}를 지급하시겠습니까?</sui-modal-content>

      <sui-modal-actions>
        <sui-button primary>지급하기</sui-button>
        <sui-button @click="modal.point.show = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all: false,
      modal: {
        point: {
          show: false,
        },
      },
      input: {
        point: 0,
        reason: '',
      },
    };
  },
  methods: {
    showPointAddModal() {
      if (this.input.point === 0) return;

      this.modal.point.show = true;
    },
  },
};
</script>
