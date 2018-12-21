<template>
  <div class="user_wr contents">
    <info @update:users="users = $event"/>
    <form-component :count="users.length" :phones="phones"/>
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
  data() {
    return {
      users: [],
    };
  },
  computed: {
    phones() {
      return this.users.map(i => i.phone);
    },
  },
};
</script>
