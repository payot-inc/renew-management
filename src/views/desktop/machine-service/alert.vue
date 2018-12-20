<template>
  <sui-modal size="tiny" v-model="s" class="pd_popup">
    <div class="hd">
      <i class="ui icon"></i>상품등록
    </div>
    <div class="in">
      <table cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td class="t1">상품명</td>
            <td class="t2">
              <input v-model="input.name" type="text" placeholder="상품명을 입력해주세요">
            </td>
          </tr>
          <tr>
            <td class="t1">동작시간</td>
            <td class="t2">
              <input v-model="input.runTimeSec" type="number" placeholder="희망하시는 동작시간을 숫자로만 입력해주세요">
              <span>분</span>
            </td>
          </tr>
          <tr>
            <td class="t1">가격</td>
            <td class="t2">
              <input v-model="input.price" type="number" placeholder="희망하시는 가격을 숫자로만 입력해주세요">
              <span>원</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <sui-modal-actions>
      <sui-button primary @click="addService()">상품등록</sui-button>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['show', 'machine'],
  data() {
    return {
      s: this.show,
      input: {
        name: '',
        runTimeSec: 0,
        price: 0,
      },
    };
  },
  watch: {
    show(newValue) {
      this.s = newValue;
    },
    s(newValue) {
      this.$emit('update:show', newValue);
    },
  },
  methods: {
    ...mapActions(['serviceAdd', 'machinesData']),

    addService() {
      const self = this;
      this.serviceAdd({
        machine: this.machine,
        input: this.input,
      }).then(() => {
        self.s = false;
        self.machinesData();
      });
    },
  },
};
</script>
