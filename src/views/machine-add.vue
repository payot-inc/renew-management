<template>
  <div class="eq_add">
    <div class="eq_info1">
      <h4>기본정보</h4>
      <table class="v_table">
        <tbody>
          <tr class="eq_name">
            <td class="t1">장비명</td>
            <td class="t2">
              <input type="text" placeholder="장비명을 정확히 입력해주세요">
            </td>
          </tr>
          <tr>
            <td class="t1">타입</td>
            <td class="t2">
              <select>
                <option>장비타입 선택</option>
                <option>세탁기</option>
                <option>건조기</option>
              </select>
            </td>
          </tr>
          <tr>
            <td class="t1">용량</td>
            <td class="t2">
              <input type="text">
              <span>Kg</span>
            </td>
          </tr>
          <tr>
            <td class="t1">도입시기</td>
            <td class="t2">
              <input type="date">
            </td>
          </tr>
          <tr>
            <td class="t1">도입가격</td>
            <td class="t2">
              <input type="text">
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
              <input type="text">
              <span>원</span>
            </td>
          </tr>
          <tr>
            <td class="t1">대표 서비스 동작시간</td>
            <td class="t2">
              <input type="text">
            </td>
          </tr>
          <tr>
            <td class="t1">MAX ADDRESS</td>
            <td class="t2">
              <input type="text">
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bottom_btns">
      <a href="#" class="eq_add_bt">
        <i class="ui sign-in icon"></i> 장비등록완료
      </a>
    </div>
  </div>
</template>
