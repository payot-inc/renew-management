<template>
  <div class="top_state">
    <ul class="ui column grid">
      <li class="two wide column">
        <dl class="blue">
          <dt>지난달 사용한 포인트</dt>
          <dd>
            <strong>50,500</strong>포인트
          </dd>
        </dl>
      </li>
      <li class="two wide column">
        <dl class="blue">
          <dt>이번달 사용한 포인트</dt>
          <dd>
            <strong>24,850</strong>포인트
          </dd>
        </dl>
      </li>
      <li class="two wide column">
        <dl class="red">
          <dt>매장 회원 수</dt>
          <dd>
            <strong>92</strong>명
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import info from './info.vue';
import DataForm from './form.vue';

export default {
  components: {
    info,
    DataForm,
  },
};
</script>
