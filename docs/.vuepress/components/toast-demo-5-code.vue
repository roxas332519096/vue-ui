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
        <g-button @click="showToast1">上放弹出消息提示</g-button>
        <g-button @click="showToast2">中间弹出消息消息提示</g-button>
        <g-button @click="showToast3">下方弹出消息提示</g-button>

         export default {
          methods: {
            showToast1() {
              this.$toast("上方消息提示", {
                position: "top"
              });
            },
            showToast2() {
              this.$toast("中间消息提示", {
                position: "middle"
              });
            },
            showToast3() {
              this.$toast("下方消息提示", {
                position: "bottom"
              });
            }
          }
        };
      `
    };
  }
};
</script>

<style>
</style>
