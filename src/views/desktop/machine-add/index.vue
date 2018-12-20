<template>
  <div class="eq_wr contents">
    <div class="eq_add">
      <div class="eq_info1">
        <h4>기본정보</h4>
        <table class="v_table">
          <tbody>
            <tr class="eq_name">
              <td class="t1">장비명</td>
              <td class="t2">
                <input type="text" placeholder="장비명을 정확히 입력해주세요" v-model="name">
              </td>
            </tr>
            <tr>
              <td class="t1">타입</td>
              <td class="t2">
                <sui-dropdown>
                  <sui-dropdown-menu>
                    <sui-dropdown-item>세탁기</sui-dropdown-item>
                    <sui-dropdown-item>건조기</sui-dropdown-item>
                  </sui-dropdown-menu>
                </sui-dropdown>
              </td>
            </tr>
            <tr>
              <td class="t1">용량</td>
              <td class="t2">
                <input v-model="size" type="text">
                <span>Kg</span>
              </td>
            </tr>
            <tr>
              <td class="t1">도입시기</td>
              <td class="t2">
                <input v-model="insertallAt" type="date">
              </td>
            </tr>
            <tr>
              <td class="t1">도입가격</td>
              <td class="t2">
                <input v-model.number="price" type="text">
                <span>원</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="eq_info2">
        <h4>서비스정보</h4>
        <table class="v_table">
          <tbody>
            <tr>
              <td class="t1">서비스 평균가격</td>
              <td class="t2">
                <input v-model="defaultPrice" type="text">
                <span>원</span>
              </td>
            </tr>
            <tr>
              <td class="t1">대표 서비스 동작시간</td>
              <td class="t2">
                <input v-model="defaultRunningTime" type="text">
              </td>
            </tr>
            <tr>
              <td class="t1">MAX ADDRESS</td>
              <td class="t2">
                <input v-model="mac" type="text">
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bottom_btns">
        <a href="#" class="eq_add_bt">
          <i class="ui sign-in icon"/>
          장비등록완료
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      mac: '',
      size: 0,
      insertallAt: new Date(),
      price: 0,
      defaultPrice: 0,
      defaultRunningTime: 0,
    };
  },
};
</script>
