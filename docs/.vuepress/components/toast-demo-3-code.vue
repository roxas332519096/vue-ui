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
         <g-button @click="showToast">打开消息提示</g-button>

         export default {
          methods: {
            showToast() {
               this.$toast("可设置关闭按钮", {
                  autoClose: false,
                  closeButton: {
                    text: "可设置的关闭按钮",
                    callback(toast) {
                      alert("关闭回调的函数");
                    }
                  }
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
