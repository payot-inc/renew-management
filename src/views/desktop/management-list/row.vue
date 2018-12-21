<template>
  <tr>
    <td>{{ data.targetDate | moment('M') }}</td>
    <td>
      <sui-input type="number" v-model.number="input.water"></sui-input>
    </td>
    <td>
      <sui-input type="number" v-model.number="input.electric"></sui-input>
    </td>
    <td>
      <sui-input type="number" v-model.number="input.gas"></sui-input>
    </td>
    <td>
      <sui-input type="number" v-model.number="input.spaceRant"></sui-input>
    </td>
    <td>
      <sui-input type="number" v-model.number="input.etc"></sui-input>
    </td>
    <td>
      <strong>{{ total | convertPrice }}</strong> 원
    </td>
    <td>{{ data.targetDate }}</td>
    <td>
      <sui-button @click="modal.show = true">수정</sui-button>
    </td>

    <sui-modal v-model="modal.show" size="mini">
      <sui-modal-header>정보 수정</sui-modal-header>

      <sui-modal-content>{{ this.input.targetDate | moment('YYYY년 MM월') }} 의 비용사용 현황을 변경하시겠습니까?</sui-modal-content>

      <sui-modal-actions>
        <sui-button primary @click="setUpdate()">변경</sui-button>
        <sui-button @click="modal.show = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>

    <sui-modal v-model="modal.success.show">
      <sui-modal-header>변경 완료</sui-modal-header>

      <sui-modal-content>{{ this.input.targetDate | moment('YYYY년 MM월') }} 의 내용이 정상적으로 변경되었습니다</sui-modal-content>

      <sui-modal-actions>
        <sui-button>확인</sui-button>
        <sui-button @click="modal.success.show = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['data'],
  data() {
    return {
      input: this.data,
      modal: {
        show: false,
        success: {
          show: false,
        },
      },
    };
  },
  computed: {
    total() {
      return (
        Number(this.data.water)
        + Number(this.data.electric)
        + Number(this.data.gas)
        + Number(this.data.spaceRant)
        + Number(this.data.etc)
      );
    },
  },
  methods: {
    ...mapActions(['updateManagement']),
    setUpdate() {
      const self = this;
      self.modal.show = false;
      // eslint-disable-next-line no-shadow
      this.updateManagement(this.input)
        .then(() => {
          self.$emit('update:row');
          self.modal.success.show = true;
        })
        .then((err) => {
          console.log(err.response.body);
        });
    },
  },
  filters: {
    convertPrice(number) {
      return Number(number).toLocaleString();
    },
  },
};
</script>
