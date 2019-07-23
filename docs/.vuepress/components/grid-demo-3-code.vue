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
          <g-row gutter="20">
            <g-col span="12">
              <div class="grid-content bg-purple-dark"></div>
            </g-col>
            <g-col span="8">
              <div class="grid-content bg-purple-dark"></div>
            </g-col>
          </g-row>
        </div>
        <div class="demo">
          <g-row>
            <g-col span="12">
              <div class="grid-content bg-purple-dark"></div>
            </g-col>
            <g-col span="6">
              <div class="grid-content bg-purple-light"></div>
            </g-col>
            <g-col span="6">
              <div class="grid-content bg-purple-dark"></div>
            </g-col>
          </g-row>
        </div>
        <div class="demo">
          <g-row gutter="20">
            <g-col span="8">
              <div class="grid-content bg-purple"></div>
            </g-col>
            <g-col span="4">
              <div class="grid-content bg-purple-light"></div>
            </g-col>
            <g-col span="4">
              <div class="grid-content bg-purple-dark"></div>
            </g-col>
            <g-col span="4">
              <div class="grid-content bg-purple-light"></div>
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
