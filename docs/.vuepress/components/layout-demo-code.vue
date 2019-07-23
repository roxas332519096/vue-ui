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
            <g-layout>
                <g-header>Header</g-header>
                <g-content>Content</g-content>
                <g-footer>Footer</g-footer>
            </g-layout>
            </div>
            <div class="demo">
            <g-header>Header</g-header>
            <g-layout>
                <g-content>Content</g-content>
                <g-sider>Sider</g-sider>
            </g-layout>
            <g-footer>Footer</g-footer>
            </div>
            <div class="demo">
            <g-header>Header</g-header>
            <g-layout>
                <g-sider>Sider</g-sider>
                <g-layout>
                <g-content>Content</g-content>
                <g-footer>Footer</g-footer>
                </g-layout>
            </g-layout>
            </div>
            <div class="demo">
            <g-layout>
                <g-sider>Sider</g-sider>
                <g-layout>
                <g-header>Header</g-header>
                <g-content>Content</g-content>
                <g-footer>Footer</g-footer>
                </g-layout>
            </g-layout>
        </div>

        <style>
            .demo {
            margin-bottom: 10px;
            }
            .g-header,
            .g-footer {
            background-color: #b3c0d1;
            color: #333;
            text-align: center;
            line-height: 60px;
            }
            .g-sider {
            width: 30%;
            background-color: #d3dce6;
            color: #333;
            text-align: center;
            line-height: 200px;
            }

            .g-content {
            background-color: #e9eef3;
            color: #333;
            text-align: center;
            line-height: 160px;
            }
        </style>
      `
    };
  }
};
</script>

<style>
</style>
