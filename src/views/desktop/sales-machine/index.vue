<template>
  <div class="eq_wr contents">
    <div class="eq_sales">
      <div class="search_box">
        <table class="v_table">
          <tbody>
            <tr class="date">
              <td class="t1">기간 검색</td>
              <td class="t2">
                <date-picker :language="datepicker.language" :format="`yyyy-MM-dd`"/>
                <date-picker :language="datepicker.language" :format="`yyyy-MM-dd`"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="t_bottom">
          <a href="#">검색</a>
        </div>
      </div>

      <div class="eq_sales_list">
        <table class="h_table">
          <thead>
            <tr>
              <td class="w_2x">번호</td>
              <td>장비명</td>
              <td class="w_3x">유형</td>
              <td class="w_3x">총 작동시간</td>
              <td class="w_4x">일 평균매출</td>
              <td class="w_4x">월 평균매출</td>
            </tr>
          </thead>
          <tbody>
            <row
              v-for="(m, index) in machines"
              :key="m.id"
              :machine="m"
              :sales="machineSales(m)"
              :number="index + 1"
            />

            <tr v-if="machines.length === 0">
              <td colspan="6" class="no_item">현재 장비 정보가 없습니다</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- eq_product -->
  </div>
</template>
<script>
import DatePicker from 'vuejs-datepicker';
import { ko } from 'vuejs-datepicker/dist/locale';
import moment from 'moment';
import { mapState, mapActions } from 'vuex';
import row from './row.vue';

export default {
  components: {
    row,
    DatePicker,
  },
  data() {
    return {
      datepicker: {
        language: ko,
      },
      data: [],
    };
  },
  mounted() {
    const self = this;
    const startDate = moment()
      .startOf('month')
      .toDate();
    const endDate = moment()
      .endOf('month')
      .toDate();

    this.salesData({ start: startDate, end: endDate }).then((data) => {
      self.data = data;
    });
  },
  computed: {
    ...mapState(['machines']),
  },
  methods: {
    ...mapActions(['salesData']),
    machineSales(machine) {
      return this.data.filter(s => s.mac === machine.mac);
    },
  },
};
</script>
