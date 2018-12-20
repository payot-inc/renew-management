<template>
  <div class="cost_wr contents">
    <div class="cost_add">
      <dl>
        <dt>
          <strong>
            <select>
              <option v-for="(v, index) in 12" :key="index">{{ index + 1 }}</option>
            </select>
          </strong>월 운영비용
        </dt>
        <dd>
          <table class="v_table">
            <tbody>
              <tr>
                <td class="t1">입력날짜</td>
                <td class="t2" colspan="5">2018-11-02 13:42:32</td>
              </tr>
              <tr>
                <td class="t1">전기세</td>
                <td class="t2">15,000원</td>
                <td class="t1">수도세</td>
                <td class="t2">15,000원</td>
                <td class="t1">가스비</td>
                <td class="t2">15,000원</td>
              </tr>
              <tr>
                <td class="t1">월세</td>
                <td class="t2" colspan="5">150,000원</td>
              </tr>
              <tr>
                <td class="t1">홍보 및 소모품비</td>
                <td class="t2" colspan="5">15,000원</td>
              </tr>
              <tr class="total">
                <td class="t1">합계</td>
                <td class="t2" colspan="5">
                  <strong>514,000</strong> 원
                </td>
              </tr>
            </tbody>
          </table>
        </dd>
      </dl>

      <form-component/>
    </div>
    <!-- cost_add -->
  </div>
</template>

<script>
import FormComponent from './form.vue';

export default {
  components: {
    FormComponent,
  },
};
</script>
