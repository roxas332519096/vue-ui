<template>
  <div>
    <g-collapse :selected.sync="selected">
      <g-collapse-item title="Code" name="code">
        <pre>
          <code>
            {{ code }}
        </code>
        </pre>
      </g-collapse-item>
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
      selected: [],
      code: `
          <g-tabs :selected.sync="selectedTab">
            <g-tabs-head>
                <g-tabs-item name="title1" disabled>标题1</g-tabs-item>
                <g-tabs-item name="title2">标题2</g-tabs-item>
                <g-tabs-item name="title3">标题3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="title1">内容1</g-tabs-pane>
                <g-tabs-pane name="title2">内容2</g-tabs-pane>
                <g-tabs-pane name="title3">内容3</g-tabs-pane>
            </g-tabs-body>
         </g-tabs>

         export default {
            data() {
                return {
                selectedTab: "title2"
                };
            }
        };
      `
    };
  }
};
</script>

<style>
</style>
