<template>
  <sui-modal class="eq_con_popup" v-model="s">
    <sui-modal-content>
      <dl>
        <dt>
          <strong>{{ machine.name }}</strong>
          <span>타입: {{ machine.type }} | 용량: {{ machine.size }}</span>
        </dt>
        <dd class="con">
          <input v-model.number="price" type="number" placeholder="동전투입">
          <textarea v-model="reason" placeholder="제어사용이유 작성"></textarea>
        </dd>
      </dl>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button @click="setClaim()">동작</sui-button>
      <sui-button @click="s = false">취소</sui-button>
    </sui-modal-actions>

    <sui-modal v-model="progress">
      <!-- <sui-modal-header></sui-modal-header> -->
      <sui-modal-content>
        <sui-icon name="spinner" size="big" loading/>
        <label>투입중 입니다. 잠시만 기다려 주십시오.</label>
      </sui-modal-content>
    </sui-modal>
  </sui-modal>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['machine', 'show'],
  data() {
    return {
      s: this.show,
      price: 0,
      reason: '',
      progress: false,
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
    ...mapActions(['claim']),

    setClaim() {
      const self = this;
      const input = {
        machine: this.machine,
        price: this.price,
        reason: this.reason,
      };
      this.progress = true;

      this.claim(input)
        .then(() => {
          self.s = false;
          self.success = true;
          self.price = 0;
          self.reason = '';

          self.progress = false;
        })
        .catch(() => {
          self.price = 0;
          self.reason = '';

          self.progress = false;
        });
    },
  },
};
</script>
