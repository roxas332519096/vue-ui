<template>
  <div class="g-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "gSider") {
        this.layoutClass.hasSider = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.g-layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
