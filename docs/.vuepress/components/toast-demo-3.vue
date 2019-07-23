<template>
  <div class="demo">
    <g-button @click="showToast">打开消息提示</g-button>
  </div>
</template>
<script>
import Vue from "vue";
import gButton from "../../../src/button";
import gToast from "../../../src/toast";
import plugin from "../../../src/plugin";
Vue.use(plugin);
export default {
  components: {
    gButton,
    gToast
  },
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
</script>

<style>
.demo {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>