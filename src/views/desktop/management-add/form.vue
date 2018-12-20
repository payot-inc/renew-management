<template>
  <dl>
    <dt>운영비용 입력</dt>
    <dd>
      <table class="v_table">
        <tbody>
          <tr>
            <td class="t1">월 선택</td>
            <td class="t2" colspan="5">
              <select>
                <option>{{ targetDate | moment('M월')}}</option>
              </select>
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
  </dl>
</template>

<script>
import moment from 'moment';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      water: 0,
      electric: 0,
      gas: 0,
      etc: 0,
      spaceRant: 0,
      targetDate: moment().format('YYYY-MM-DD'),
    };
  },
  computed: {
    input() {
      return {
        water: this.water,
        electric: this.electric,
        gas: this.gas,
        etc: this.etc,
        spaceRant: this.spaceRant,
        repair: 0,
        management: 0,
      };
    },
    total() {
      return this.water + this.electric + this.gas + this.etc + this.spaceRant;
    },
  },
  methods: {
    ...mapActions(['appendManagementData']),

    setManagement() {
      console.log(this.$data);
    },
  },
};
</script>
