<template>
  <div class="tabsBody">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gTabsBody",
  inject: ["eventBus"],
};
</script>

<style lang="scss" scoped>
.tabsBody {
}
</style>
