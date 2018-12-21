<template>
  <div class="navi">
    <ul>
      <div v-for="(depth, index) in navi" :key="index">
        <li>
          <a>{{ depth }}</a>
        </li>
        <li v-if="navi.length != index + 1">
          <i class="ui angle right icon"></i>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['navi'],
  computed: {
    ...mapState(['routePath']),
  },
};
</script>
