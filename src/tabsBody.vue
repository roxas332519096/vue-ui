<template>
  <div class="gTabsBody">
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
.gTabsBody {
}
</style>
