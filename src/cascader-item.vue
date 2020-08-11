<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <g-cascader-item
      v-for="item in sourceItem.children"
      :source-item="item"
      v-if="sourceItem.children"
      :key="item.id"
    ></g-cascader-item>
  </div>
</template>

<script>
export default {
  name: "gCascaderItem",
  props: {
    sourceItem: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.cascaderItem {
  margin-left: 10px;
}
</style>