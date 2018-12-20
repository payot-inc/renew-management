<template>
  <li class="column">
    <dl>
      <dt>
        <strong>2</strong>
        <!-- <sui-button @click="$emmit('update:selected', machine)">
          <i class="ui cog icon"></i>
        </sui-button>-->
        <a @click="showDialog()">
          <i class="ui cog icon"></i>
        </a>
      </dt>
      <dd class="info">
        <strong>{{ machine.name }}</strong>
        <span>타입: {{ machine.type }} | 용량: {{ machine.size }}</span>
      </dd>
      <dd class="mac">
        <span>{{ machine.mac }}</span>
      </dd>
    </dl>
  </li>
</template>

<script>
export default {
  props: ['machine'],
  methods: {
    showDialog() {
      this.$emit('update:selected', this.machine);
    },
  },
};
</script>
