<template>
  <div class="shade" @click="shadeClick">
      <div class="shade-content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Shade',
  data() {
      return {}
  },
  methods: {
      shadeClick() {
          this.$emit("shadeClick")
      }
  }
}
</script>

<style>
    .shade {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 100;
    }
    .shade-content {
        /* background-color: white; */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
