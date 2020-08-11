<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source" :key="item.id">
        <g-cascader-item :source-item="item"></g-cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import gCascaderItem from "./cascader-item";
export default {
  name: "gCascader",
  components: {
    gCascaderItem
  },
  props:{
    source:{
      type:Array
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.cascader {
}
</style>