<template>
  <div class="eq_wr contents">
    <div class="eq_sales">
      <div class="search_box">
        <table class="v_table">
          <tbody>
            <tr class="date">
              <td class="t1">기간 검색</td>
              <td class="t2">
                <date-picker
                  v-model="date.start"
                  :language="datepicker.language"
                  :format="`yyyy-MM-dd`"
                />
                <date-picker
                  v-model="date.end"
                  :language="datepicker.language"
                  :format="`yyyy-MM-dd`"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <sui-segment>
        <sui-dimmer :active="loading">
          <sui-loader/>
        </sui-dimmer>

        <div class="eq_sales_list">
          <table class="h_table">
            <thead>
              <tr>
                <td class="w_2x">번호</td>
                <td>장비명</td>
                <td class="w_3x">유형</td>
                <td class="w_3x">총 작동시간</td>
                <td class="w_4x">일 평균매출</td>
                <td class="w_4x">누적매출</td>
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
        <docs-wireframe name="short-paragraph"/>
      </sui-segment>
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
      loading: false,
      datepicker: {
        language: ko,
      },
      date: {
        start: new Date(),
        end: new Date(),
      },
      data: [],
    };
  },
  mounted() {
    this.gettingData();
  },
  watch: {
    // eslint-disable-next-line func-names
    'date.start': function (newValue) {
      if (moment(newValue) < moment(this.date.end)) {
        this.gettingData();
      }
    },

    // eslint-disable-next-line func-names
    'date.end': function (newValue) {
      if (moment(newValue) > moment(this.date.start)) {
        this.gettingData();
      }
    },
  },
  computed: {
    ...mapState(['machines']),
  },
  methods: {
    ...mapActions(['salesData']),
    machineSales(machine) {
      return this.data.filter(s => s.mac === machine.mac);
    },

    gettingData() {
      const self = this;
      const startDate = moment(this.date.start)
        .add(-1, 'day')
        .toDate();
      const endDate = moment(this.date.end)
        .add(1, 'day')
        .toDate();

      this.loading = true;
      this.salesData({ start: startDate, end: endDate })
        .then((data) => {
          self.data = data;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>
