<template>
  <div class="gTabsHead">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "gTabsHead",
  props: {},
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("updated:selected", (name, item) => {
      let { width, height, top, left } = item.$el.getBoundingClientRect();
      let parentLeft = this.$el.getBoundingClientRect().left;
      console.log("this", left);
      console.log("parent", parentLeft);
      this.$refs.line.style.width = `${width}px`;
      let offsetLeft = left - parentLeft;
      this.$refs.line.style.left = `${offsetLeft}px`;
    });
  }
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$border-color: #ddd;
$blue: blue;
.gTabsHead {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $tab-height;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 0.3s;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
}
</style>
