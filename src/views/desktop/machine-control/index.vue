<template>
  <div class="eq_wr contents">
    <div class="eq_control">
      <div class="eq_co_list">
        <ul class="ui doubling stackable five column grid">
          <row
            v-for="(m, index) in machines"
            :key="index"
            :machine="m"
            :index="index"
            @update:selected="showDialog($event)"
          />
        </ul>
      </div>
    </div>
    <alert :show="show" :machine="select" @update:show="show = $event"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import row from './row.vue';
import alert from './alert.vue';

export default {
  components: {
    row,
    alert,
  },
  data() {
    return {
      select: {},
      show: false,
    };
  },
  computed: {
    ...mapState(['machines']),
  },
  methods: {
    showDialog(machine) {
      this.select = machine;
      this.show = true;
    },
  },
};
</script>
