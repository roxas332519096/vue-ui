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
      this.$toast(`<a href="#">这是一段HTML片段</a>`, {
        enableHtml: true
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