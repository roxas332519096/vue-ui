<template>
  <div class="demo">
    <g-button @click="showToast1">上放弹出消息提示</g-button>
    <g-button @click="showToast2">中间弹出消息消息提示</g-button>
    <g-button @click="showToast3">下方弹出消息提示</g-button>
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
</script>

<style>
.demo{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
