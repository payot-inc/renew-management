<template>
  <div class="user_wr contents">
    <info/>
    <form-component/>
  </div>
</template>

<script>
import info from './info.vue';
import FormComponent from './form.vue';

export default {
  components: {
    info,
    FormComponent,
  },
};
</script>
