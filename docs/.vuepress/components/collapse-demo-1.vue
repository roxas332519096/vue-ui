<template>
  <div class="demo">
    <g-collapse :selected.sync="selectedTab">
      <g-collapse-item title="title1" name="1">1</g-collapse-item>
      <g-collapse-item title="title2" name="2">2</g-collapse-item>
      <g-collapse-item title="title3" name="3">3</g-collapse-item>
      <g-collapse-item title="title4" name="4">4</g-collapse-item>
    </g-collapse>
  </div>
</template>

<script>
import gCollapse from "../../../src/collapse.vue";
import gCollapseItem from "../../../src/collapse-item.vue";
export default {
  components: {
    gCollapse,
    gCollapseItem
  },
  data() {
    return {
      selectedTab: []
    };
  }
};
</script>

<style>
.demo {
  margin-bottom: 20px;
}
</style>
