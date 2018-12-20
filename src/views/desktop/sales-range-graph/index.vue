<template>
  <div class="sales_wr contents">
    <div class="period_sales">
      <div class="day_grap">
        <h4>
          <i class="ui calendar outline icon"></i>일별 매출현황
        </h4>
        <div class="search_bar">
          <table class="v_table">
            <tbody>
              <tr>
                <td class="t1">날짜별 검색</td>
                <td class="t2">
                  <date-picker
                    v-model="date.day"
                    :language="datepicker.language"
                    :format="`yyyy-MM-dd`"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="grap_box">
          <day-chart :date="date.day"/>
        </div>
      </div>

      <div class="day_grap">
        <h4>
          <i class="ui calendar outline icon"></i> 주간 매출현황
        </h4>
        <div class="search_bar">
          <table class="v_table">
            <tbody>
              <tr>
                <td class="t1">날짜별 검색</td>
                <td class="t2">
                  <date-picker
                    v-model="date.week"
                    :language="datepicker.language"
                    :format="`yyyy-MM-dd`"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="grap_box">
          <week-chart :date="date.week"/>
        </div>
      </div>

      <div class="month_grap">
        <h4>
          <i class="ui calendar outline icon"></i> 월별 매출현황
        </h4>
        <div class="search_bar">
          <table class="v_table">
            <tbody>
              <tr>
                <td class="t1">날짜별 검색</td>
                <td class="t2">
                  <date-picker
                    v-model="date.month"
                    :language="datepicker.language"
                    :format="`yyyy-MM-dd`"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="grap_box">
          <month-chart :date="date.month"/>
        </div>
      </div>
    </div>
    <!-- period_sales -->
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import { ko } from 'vuejs-datepicker/dist/locale';
import DayChart from './day.vue';
import WeekChart from './week.vue';
import MonthChart from './month.vue';

export default {
  components: {
    DayChart,
    WeekChart,
    MonthChart,
    DatePicker,
  },
  data() {
    return {
      datepicker: {
        language: ko,
      },
      date: {
        day: new Date(),
        week: new Date(),
        month: new Date(),
      },
    };
  },
};
</script>
