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
        <div class="demo">
          <g-row>
            <g-col :xs="{span:8}" :sm="{span:6}" :md="{span:4}" :lg="{span:3}" :xl="{span:1}">
              <div class="grid-content bg-purple"></div>
            </g-col>
            <g-col :xs="{span:4}" :sm="{span:6}" :md="{span:8}" :lg="{span:9}" :xl="{span:11}">
              <div class="grid-content bg-purple-dark"></div>
            </g-col>
            <g-col :xs="{span:4}" :sm="{span:6}" :md="{span:8}" :lg="{span:9}" :xl="{span:11}">
              <div class="grid-content bg-purple"></div>
            </g-col>
            <g-col :xs="{span:8}" :sm="{span:6}" :md="{span:4}" :lg="{span:3}" :xl="{span:1}">
              <div class="grid-content bg-purple-dark"></div>
            </g-col>
          </g-row>
        </div>
      `
    };
  }
};
</script>

<style>
</style>
