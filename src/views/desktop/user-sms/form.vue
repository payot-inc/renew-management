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
            <textarea v-model="message" id="fixed" placeholder="최대 80자까지 작성이 가능합니다"></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="bottom_btns">
      <sui-button :disabled="!all || message.length === 0" @click="modal.show = true">문자 전송하기</sui-button>
    </div>

    <sui-modal v-model="modal.show" size="mini">
      <sui-modal-header>문자 전송하기</sui-modal-header>

      <sui-modal-content>총 {{ count }}명에게 문자메시지를 전송합니다.</sui-modal-content>

      <sui-modal-actions>
        <sui-button primary @click="sendSMS()">전송하기</sui-button>
        <sui-button @click="modal.show = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>

    <sui-modal v-model="modal.success" size="mini">
      <sui-modal-content>문자전송을 완료하였습니다</sui-modal-content>

      <sui-modal-actions>
        <sui-button @click="modal.success = false" primary>닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['count', 'phones'],
  data() {
    return {
      all: false,
      message: '',
      modal: {
        success: false,
        show: false,
      },
    };
  },
  mounted() {
    console.log(this.message.length);
  },
  methods: {
    ...mapActions(['sms']),
    sendSMS() {
      const self = this;
      const users = this.all ? this.phones : [''];
      this.sms({ message: this.message })
        .then(data => {
          self.modal.show = false;
          self.modal.success = true;
          self.message = '';
          console.log(data);
        })
        .catch(err => {
          console.log(err.response.body);
        });
    },
  },
};
</script>


<style scoped>
#fixed {
  min-height: 400px;
  max-height: 400px;
}
</style>
