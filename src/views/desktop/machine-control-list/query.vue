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
      </tbody>
    </table>
    <div class="t_bottom"></div>
  </div>
</template>

<script>
import { ko } from 'vuejs-datepicker/dist/locale';
import DatePicker from 'vuejs-datepicker';

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
    };
  },
  watch: {
    s(newValue) {
      this.$emit('update:start', newValue);
    },
    e(newValue) {
      this.$emit('update:end', newValue);
    },
  },
};
</script>
