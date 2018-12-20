<template>
  <div class="user_wr contents">
    <info/>
    <data-form/>
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
