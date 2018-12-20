<template>
  <li>
    <sui-accordion class="menu fluid" exclusive>
      <sui-accordion-title>
        <i class="dropdown icon"></i>
        <strong class="num">01</strong>
        <strong class="name">{{ machine.name }}</strong>
        <span>타입: {{ machine.type }} | 용량 {{ machine.size }}</span>
      </sui-accordion-title>

      <sui-accordion-content>
        <table class="h_table">
          <thead>
            <tr>
              <td class="w_1x">번호</td>
              <td>상품명</td>
              <td class="w_2x">동작시간</td>
              <td class="w_3x">가격</td>
              <td>사용상태</td>
              <td>설정</td>
            </tr>
          </thead>
          <tbody>
            <service-row
              v-for="(s, index) in machine.services"
              :key="s.id"
              :number="index + 1"
              :service="s"
            />
            <tr v-if="machine.services.length === 0">
              <td colspan="6" class="no_item">등록된 상품이 없습니다</td>
            </tr>
          </tbody>
        </table>

        <div class="t_bottom">
          <sui-button @click="addDialog()" class="pd_popup_on">상품등록</sui-button>
        </div>
      </sui-accordion-content>
    </sui-accordion>

    <alert :show="show" :machine="machine" @update:show="show = $event"/>
  </li>
</template>

<script>
import ServiceRow from './service-row.vue';
import Alert from './alert.vue';

export default {
  props: ['machine'],
  components: {
    ServiceRow,
    Alert,
  },
  data() {
    return {
      show: false,
      addService: [],
    };
  },
  methods: {
    addDialog() {
      this.show = true;
    },
  },
};
</script>
