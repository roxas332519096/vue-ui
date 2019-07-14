<template>
  <div class="gTabsHead">
    <slot></slot>
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
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.gTabsHead {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $tab-height;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
