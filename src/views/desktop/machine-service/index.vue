<template>
  <div class="eq_wr contents">
    <div class="eq_product">
      <div class="eq_pd_list">
        <ul>
          <row v-for="(m, index) in machines" :key="m.id" :machine="m" :index="index"/>
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
