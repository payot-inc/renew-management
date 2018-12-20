<template>
  <div class="eq_wr contents">
    <div class="eq_product">
      <div class="eq_pd_list">
        <ul>
          <row v-for="m in machines" :key="m.id" :machine="m"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import row from './machine-row.vue';

export default {
  components: {
    row,
  },
  computed: {
    ...mapState(['machines']),
  },
};
</script>
