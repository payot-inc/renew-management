<template>
  <div class="top_state">
    <ul class="ui column grid">
      <li class="two wide column">
        <dl class="red">
          <dt>{{ month.prev | moment('MM') }}월 더런드리 문자전송건수</dt>
          <dd>
            <strong>{{ lastMonthFranchiseCount }}</strong>건
          </dd>
        </dl>
      </li>
      <li class="two wide column">
        <dl class="red">
          <dt>{{ month.now | moment('MM') }}월 더런드리 문자전송건수</dt>
          <dd>
            <strong>{{ nowMonthFranchiseCount }}</strong>건
          </dd>
        </dl>
      </li>
      <li class="two wide column">
        <dl class="blue">
          <dt>{{ month.prev | moment('MM') }}월 점주 문자전송건수</dt>
          <dd>
            <strong>{{ lastMonthCompanyCount }}</strong>건
          </dd>
        </dl>
      </li>
      <li class="two wide column">
        <dl class="blue">
          <dt>{{ month.now | moment('MM') }}월 점주 문자전송건수</dt>
          <dd>
            <strong>{{ nowMonthCompanyCount }}</strong>건
          </dd>
        </dl>
      </li>
      <li class="two wide column">
        <dl class="blue">
          <dt>매장 회원 수</dt>
          <dd>
            <strong>{{ users.length }}</strong>명
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      month: {
        prev: moment()
          .add(-1, 'month')
          .toDate(),
        now: new Date(),
      },
      users: [],
      list: [],
    };
  },
  mounted() {
    this.gettingData();
  },
  computed: {
    lastMonthFranchiseCount() {
      const result = this.filterList(-1, 'franchise');

      return result.reduce((acc, value) => acc + Number(value.count), 0);
    },
    nowMonthFranchiseCount() {
      const result = this.filterList(0, 'franchise');

      return result.reduce((acc, value) => acc + Number(value.count), 0);
    },
    lastMonthCompanyCount() {
      const result = this.filterList(-1, 'company');

      return result.reduce((acc, value) => acc + Number(value.count), 0);
    },
    nowMonthCompanyCount() {
      const result = this.filterList(0, 'company');

      return result.reduce((acc, value) => acc + Number(value.count), 0);
    },
  },
  methods: {
    ...mapActions(['smsList', 'usersData']),

    gettingData() {
      const self = this;
      this.smsList().then(data => {
        self.$emit('update:list', data);
        self.list = data;
      });

      this.usersData().then(data => {
        self.$emit('update:users', data);
        self.users = data;
      });
    },

    filterList(month, sender) {
      const filterList = this.list.filter(i => {
        const lastMonth = moment()
          .add(month, 'month')
          .month();
        const smsMonth = moment(i.createdAt).month();

        return lastMonth === smsMonth && i.sender === sender;
      });

      return filterList;
    },
  },
};
</script>
