<template>
  <div class="gTabsHead">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "gTabsHead",
  props: {}
};
</script>

<style lang="scss" scoped>
.gTabsHead {
}
</style>
