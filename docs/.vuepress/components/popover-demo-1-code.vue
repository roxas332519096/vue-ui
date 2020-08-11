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
          <g-popover position="top">
            <template slot="content">
              <div>content</div>
            </template>
            <g-button>Top</g-button>
          </g-popover>
          <g-popover position="bottom">
            <template slot="content">
              <div>content</div>
            </template>
            <g-button>Bottom</g-button>
          </g-popover>
          <g-popover position="left">
            <template slot="content">
              <div>content</div>
            </template>
            <g-button>Left</g-button>
          </g-popover>
          <g-popover position="right">
            <template slot="content">
              <div>content</div>
            </template>
            <g-button>Right</g-button>
          </g-popover>
      `
    };
  }
};
</script>

<style>
</style>
