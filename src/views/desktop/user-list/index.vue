<template>
  <div class="sales_wr contents">
    <div class="search_box">
      <table class="v_table">
        <tbody>
          <tr class="phone">
            <td class="t1">회원번호</td>
            <td class="t2">
              <input v-model="filter" type="text">
            </td>
          </tr>
        </tbody>
      </table>
      <div class="t_bottom">
        <a href="#">검색</a>
      </div>
    </div>

    <div class="user_list">
      <div class="list_state">
        <div class="state_nb">
          등록된 회원
          <strong>{{ users.length.toLocaleString() }}</strong> 명
        </div>
      </div>

      <table class="h_table">
        <thead>
          <tr>
            <td class="w_2x">번호</td>
            <td class="w_4x">회원 전화번호</td>
            <td class="w_3x">가입날짜</td>
            <td class="t4">남은포인트</td>
            <td class="t5">사용포인트</td>
            <td class="w_3x">결제내역</td>
          </tr>
        </thead>

        <tbody>
          <row
            v-for="(u, index) in filterList"
            :key="u.phone"
            :number="index + 1"
            :user="u"
            @update:user="showModal($event)"
          />
        </tbody>
      </table>

      <div class="bottom_btns">
        <div class="paging_wr">
          <span class="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>
            <i class="ui angle right icon"></i>
          </span>
        </div>
        <router-link to="/user-point-add">포인트 적립</router-link>
        <router-link to="/user-point-use">포인트 사용현황</router-link>
      </div>
    </div>
    <!-- user_list -->
    <alert :user="selectUser" :show="show" @update:show="show = $event"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import alert from './alert.vue';
import row from './row.vue';

export default {
  components: {
    row,
    alert,
  },
  data() {
    return {
      users: [],
      filter: '',
      selectUser: {},
      show: false,
    };
  },
  mounted() {
    const self = this;
    this.usersData().then((data) => {
      self.users = data;
    });
  },
  computed: {
    filterList() {
      const query = this.filter;
      return this.users.filter(v => v.phone.includes(query));
    },
  },
  methods: {
    ...mapActions(['usersData']),

    showModal(user) {
      this.selectUser = user;
      this.show = true;
    },
  },
};
</script>
