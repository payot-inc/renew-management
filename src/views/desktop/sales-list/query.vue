<template>
  <div class="search_box">
    <table class="v_table">
      <tbody>
        <tr class="date">
          <td class="t1">기간 검색</td>
          <td class="t2">
            <date-picker v-model="s" :language="datepicker.language" :format="`yyyy-MM-dd`"/>
            <date-picker v-model="e" :language="datepicker.language" :format="`yyyy-MM-dd`"/>
          </td>
        </tr>
        <tr>
          <td class="t1">장비명</td>
          <td class="t2">
            <sui-dropdown v-model="m" placeholder="장비" selection :options="machineList()"/>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="t_bottom"></div>
  </div>
</template>

<script>
import { ko } from 'vuejs-datepicker/dist/locale';
import DatePicker from 'vuejs-datepicker';
import { mapState } from 'vuex';

export default {
  components: {
    DatePicker,
  },
  props: ['start', 'end'],
  data() {
    return {
      datepicker: {
        language: ko,
      },
      s: this.start,
      e: this.end,
      m: '',
    };
  },
  computed: {
    ...mapState(['machines']),
  },
  watch: {
    s(newValue) {
      this.$emit('update:start', newValue);
    },
    e(newValue) {
      this.$emit('update:end', newValue);
    },
    m(newValue) {
      this.$emit('update:machine', newValue);
    },
  },
  methods: {
    machineList() {
      const array = this.machines.map((i) => {
        const obj = { value: i.mac, text: i.name };

        return obj;
      });

      array.unshift({ value: '', text: '전체' });
      return array;
    },
  },
};
</script>
