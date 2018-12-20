<template>
  <tr>
    <td>{{ number }}</td>
    <td>
      <sui-input v-model="input.name" type="text"/>
    </td>
    <td>
      <sui-input v-model.number="input.runTimeSec" type="number" placeholder="동작시간(초)"/>
    </td>
    <td>
      <sui-input v-model="input.price" type="number" placeholder="상품가격(원)"/>
    </td>
    <td>-</td>
    <td>
      <sui-button @click="modal.update.show = true">수정</sui-button>
      <sui-button @click="modal.delete.show = true">삭제</sui-button>
    </td>

    <sui-modal size="mini" v-model="modal.delete.show">
      <sui-modal-header>상품 삭제</sui-modal-header>
      <sui-modal-content>{{ service.name }}을 삭제하시겠습니까?</sui-modal-content>

      <sui-modal-actions>
        <sui-button negative @click="setDeleteService()">삭제</sui-button>
        <sui-button @click="modal.delete.show = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>

    <sui-modal size="mini" v-model="modal.update.show">
      <sui-modal-header>상품정보 업데이트</sui-modal-header>
      <sui-modal-content>{{ service.name }} 정보를 변경하시겠습니까?</sui-modal-content>

      <sui-modal-actions>
        <sui-button primary @click="setUpdateService()">변경</sui-button>
        <sui-button @click="modal.update.show = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['number', 'service'],
  data() {
    return {
      input: this.service,
      modal: {
        delete: {
          show: false,
        },
        update: {
          show: false,
        },
      },
    };
  },
  methods: {
    ...mapActions(['machinesData', 'updateService', 'deleteService']),

    setUpdateService() {
      const self = this;
      this.modal.update.show = false;

      this.updateService({ service: self.input })
        .then(() => {
          self.modal.update.show = false;
          self.machinesData();
        })
        .catch(() => {
          self.modal.update.show = false;
        });
    },

    setDeleteService() {
      const self = this;
      this.modal.delete.show = false;

      this.deleteService({
        service: this.input,
      })
        .then(() => {
          self.modal.delete.show = false;
          self.machinesData();
        })
        .catch(() => {
          self.modal.delete.show = false;
        });
    },
  },
  filters: {
    formatPrice(price) {
      if (!price) return 0;

      return price.toLocaleString();
    },

    convertMin(time) {
      return Math.ceil(time / 60);
    },
  },
};
</script>
