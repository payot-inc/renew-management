<template>
  <div class="top_state">
    <ul class="ui column grid">
      <li class="two wide column">
        <dl class="blue">
          <dt>고객 총 보유 포인트</dt>
          <dd>
            <strong>{{ totalPoint.toLocaleString() }}</strong>포인트
          </dd>
        </dl>
      </li>
      <li class="two wide column">
        <dl class="red">
          <dt>매장 회원 수</dt>
          <dd>
            <strong>{{ data.users.length.toLocaleString() }}</strong>명
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      data: {
        users: [],
        points: [],
      },
    };
  },
  mounted() {
    this.gettingData();
  },
  computed: {
    totalPoint() {
      return this.data.users.reduce((acc, v) => acc + Number(v.point), 0);
    },
  },
  methods: {
    ...mapActions(['usersData']),

    gettingData() {
      const self = this;
      this.usersData().then((data) => {
        self.data.users = data;
        self.$emit('update:users', data);
      });
    },
  },
};
</script>
