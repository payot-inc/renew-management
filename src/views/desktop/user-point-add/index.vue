<template>
  <div class="user_wr contents">
    <info @update:users="users = $event"/>
    <data-form :users="users"/>
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
  data() {
    return {
      users: [],
    };
  },
};
</script>
