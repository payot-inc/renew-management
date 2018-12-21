<template>
  <dl>
    <dt>운영비용 입력</dt>
    <dd>
      <table class="v_table">
        <tbody>
          <tr>
            <td class="t1">월 선택</td>

            <td class="t2" colspan="5">
              <sui-dropdown :options="months" search selection v-model="targetDate" placeholder="월"></sui-dropdown>
            </td>
          </tr>
          <tr>
            <td class="t1">전기세</td>
            <td class="t2">
              <input type="number" v-model.number="electric">
              <label>원</label>
            </td>
            <td class="t1">수도세</td>
            <td class="t2">
              <input type="number" v-model.number="water">
              <label>원</label>
            </td>
            <td class="t1">가스비</td>
            <td class="t2">
              <input type="number" v-model.number="gas">
              <label>원</label>
            </td>
          </tr>
          <tr>
            <td class="t1">월세</td>
            <td class="t2" colspan="5">
              <input type="number" v-model.number="spaceRant">
              <label>원</label>
            </td>
          </tr>
          <tr>
            <td class="t1">홍보 및 소모품비</td>
            <td class="t2" colspan="5">
              <input type="number" v-model.number="etc">
              <label>원</label>
            </td>
          </tr>
          <tr class="total">
            <td class="t1">합계</td>
            <td class="t2" colspan="5">
              <strong>{{ total.toLocaleString() }}</strong>
              <label>원</label>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="bottom_btns">
        <sui-button @click="setManagement()">비용입력 완료</sui-button>
      </div>
    </dd>

    <sui-modal v-model="modal.error.show" size="mini">
      <sui-modal-header>{{ modal.error.title }}</sui-modal-header>

      <sui-modal-content>{{ modal.error.message }}</sui-modal-content>

      <sui-modal-actions>
        <sui-button @click="modal.error.show = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </dl>
</template>

<script>
import moment from 'moment';
import { times } from 'lodash';
import { mapActions } from 'vuex';

export default {
  props: ['year'],
  data() {
    return {
      months: [],
      water: 0,
      electric: 0,
      gas: 0,
      etc: 0,
      spaceRant: 0,
      targetDate: moment().format('YYYY-MM-DD'),
      modal: {
        error: {
          show: false,
          title: '',
          message: '',
        },
      },
    };
  },
  mounted() {
    this.months = times(12, i => ({
      key: i + 1,
      value: i + 1,
      text: `${i + 1}월`,
    }));
  },
  computed: {
    input() {
      return {
        water: this.water,
        electric: this.electric,
        gas: this.gas,
        etc: this.etc,
        spaceRant: this.spaceRant,
        targetDate: `${this.year}-${this.targetDate}-01`,
        repiar: 0,
        management: 0,
      };
    },
    total() {
      return this.water + this.electric + this.gas + this.etc + this.spaceRant;
    },
  },
  watch: {
    // eslint-disable-next-line func-names
    'modal.error.show': function (newValue) {
      if (newValue) return;

      this.modal.error.message = '';
      this.modal.error.title = '';
    },
  },
  methods: {
    ...mapActions(['appendManagementData']),

    setManagement() {
      const self = this;
      this.appendManagementData({ input: this.input })
        .then((data) => {
          self.$emit('update:insert', data);
        })
        .catch((err) => {
          const code = err.response.status;
          if (code === 500) {
            self.modal.error.title = '중복된 내용';
            self.modal.error.message =              '이미 입력된 내용입니다 아래 내용에 수정해 주세요';
          } else {
            self.modal.error.title = '날짜 선택';
            self.modal.error.message = '날짜를 선택해 주세요';
          }

          self.modal.error.show = true;
        });
    },
  },
};
</script>
