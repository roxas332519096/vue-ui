<template>
  <div class="tabsItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.tabsItem {
}
</style>
