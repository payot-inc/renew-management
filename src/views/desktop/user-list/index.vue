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
            <!-- <td class="t5">사용포인트</td> -->
            <td class="w_3x">회원탈퇴</td>
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

          <tr>
            <td v-if="filterList.length === 0" colspan="6" class="no_item">회원이 존재하지 않습니다</td>
          </tr>
        </tbody>
      </table>

      <div class="bottom_btns">
        <div class="paging_wr">
          <span v-show="page.now !==  1" @click="page.now -= 1">
            <i class="ui angle left icon"></i>
          </span>
          <span
            v-for="(key, index) in totalPage"
            :key="index"
            :class="{ active: index + 1 === page.now }"
            @click="page.now = index + 1"
          >{{ index + 1 }}</span>
          <span v-show="page.now !== totalPage" @click="page.now += 1">
            <i class="ui angle right icon"></i>
          </span>
        </div>
        <router-link to="/user-point-add">포인트 적립</router-link>
        <router-link to="/user-point-use">포인트 적립내역</router-link>
      </div>
    </div>
    <!-- user_list -->
    <sui-modal v-model="show" size="mini">
      <sui-modal-header>회원 삭제</sui-modal-header>

      <sui-modal-content>{{ selectUser.phone }} 회원을 삭제하시겠습니까?</sui-modal-content>

      <sui-modal-actions>
        <sui-button negative @click="setDeleteUser()">확인</sui-button>
        <sui-button @click="show = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>

    <sui-modal v-model="modal.success.show">
      <sui-modal-content>회원이 정상적으로 삭제되었습니다</sui-modal-content>
      <sui-modal-actions>
        <sui-button @click="modal.success.show = false">닫기</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import row from './row.vue';

export default {
  components: {
    row,
  },
  data() {
    return {
      users: [],
      filter: '',
      selectUser: {},
      show: false,
      page: {
        now: 1,
      },
      modal: {
        success: {
          show: false,
        },
      },
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

    totalPage() {
      return Math.ceil(this.filterList.length / 20);
    },
  },
  methods: {
    ...mapActions(['usersData', 'deleteUser']),

    showModal(user) {
      this.selectUser = user;
      this.show = true;
    },

    setDeleteUser() {
      const self = this;
      self.show = false;

      this.deleteUser({ user: self.selectUser })
        .then(() => {
          self.show = false;
          self.modal.success.show = true;

          return self.usersData();
        })
        .then((data) => {
          self.users = data;
        });
    },
  },
};
</script>
