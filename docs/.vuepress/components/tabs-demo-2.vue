<template>
  <div class="demo">
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name="title1">标题1</g-tabs-item>
        <g-tabs-item name="title2">标题2</g-tabs-item>
        <g-tabs-item name="title3">标题3</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="title1">内容1</g-tabs-pane>
        <g-tabs-pane name="title2">内容2</g-tabs-pane>
        <g-tabs-pane name="title3">内容3</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import gIcon from "../../../src/icon.vue";
import gTabsBody from "../../../src/tabsBody.vue";
import gTabsHead from "../../../src/tabsHead.vue";
import gTabsItem from "../../../src/tabsItem.vue";
import gTabsPane from "../../../src/tabsPane.vue";
import gTabs from "../../../src/tabs.vue";
export default {
  components: {
    gIcon,
    gTabs,
    gTabsHead,
    gTabsItem,
    gTabsPane,
    gTabsBody
  },
  data() {
    return {
      selectedTab: "title1"
    };
  }
};
</script>

<style>
.demo {
  margin-bottom: 20px;
}
</style>
