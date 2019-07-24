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
        <g-popover position="bottom">
          <template slot="content" slot-scope="{close}">
            <div>
              <g-button @click="close">Close</g-button>
            </div>
          </template>
          <g-button>Click</g-button>
        </g-popover>
      `
    };
  }
};
</script>

<style>
</style>
