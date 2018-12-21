<template>
  <tr>
    <td>{{ number }}</td>
    <td>
      <strong>{{ control.createdAt | moment('YYYY-MM-DD hh시mm분') }}</strong>
      <span>{{ control.payAt | moment('hh:mm:ss') }}</span>
    </td>
    <td>
      <strong>{{ machine.name }}</strong>
      <span class="eq_info">타입: {{ machine.type }} / 용량 {{ machine.size }}</span>
    </td>
    <td>{{ control.reason }}</td>
    <td class="t8">
      <strong>{{ Number(control.amount).toLocaleString() }}</strong>
    </td>
  </tr>
</template>

<script>
import { mapState } from 'vuex';
import { find } from 'lodash';

export default {
  props: ['control', 'number'],

  computed: {
    ...mapState(['machines']),

    machine() {
      const machineId = this.control.machineId;
      return find(this.machines, v => v.id === machineId);
    },
  },
};
</script>
