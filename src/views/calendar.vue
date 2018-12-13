<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      month: new Date()
    };
  },
  mounted() {},
  methods: {
    ...mapActions(['getSales'])
  },
  filters: {
    dateFormat(date) {
      return moment(date).format('YYYY-MM');
    }
  }
};
</script>
