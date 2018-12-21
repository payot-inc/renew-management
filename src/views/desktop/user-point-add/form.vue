<template>
  <div class="point_add">
    <table class="v_table">
      <tbody>
        <tr>
          <td class="t1">적립 대상</td>
          <td class="t2">
            <div class="phone_nb">
              <sui-dropdown
                v-model="phone"
                placeholder="전화번호"
                :options="filteredPhone"
                search
                selection
                :noResultsMessage="'해당하는 전화번호가 없습니다'"
                :disabled="!all"
              ></sui-dropdown>
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
            <textarea v-model="input.message"></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="bottom_btns">
      <sui-button :disabled="input.point === 0" @click="modal.point.show = true">포인트 지급하기</sui-button>
    </div>

    <sui-modal v-model="modal.point.show" size="mini">
      <sui-modal-header>포인트 지급</sui-modal-header>

      <sui-modal-content>{{ input.point }}를 지급하시겠습니까?</sui-modal-content>

      <sui-modal-actions>
        <sui-button primary @click="add()">지급하기</sui-button>
        <sui-button @click="modal.point.show = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['users'],
  data() {
    return {
      all: false,
      phone: '',
      modal: {
        point: {
          show: false,
        },
      },
      input: {
        point: 0,
        message: '',
      },
    };
  },
  computed: {
    filteredPhone() {
      if (this.users === undefined || this.users.length === 0) return [];

      return this.users.map((i) => {
        // eslint-disable-next-line prefer-destructuring
        const phone = i.phone;

        return { value: phone, text: phone };
      });
    },
  },
  methods: {
    ...mapActions(['addPoint']),
    add() {
      if (this.input.point === 0) return;

      const self = this;
      const input = this.input;
      const phone = this.all ? this.users.map(v => v.phone) : [this.phone];
      input.phones = phone;

      this.addPoint(input)
        .then((data) => {
          self.modal.point.show = false;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>
