<template>
  <div>
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
  </div>
</template>

<script>
import gLayout from "../../../src/layout.vue";
import gHeader from "../../../src/header.vue";
import gContent from "../../../src/content.vue";
import gSider from "../../../src/sider.vue";
import gFooter from "../../../src/footer.vue";

export default {
  components: {
    gLayout,
    gHeader,
    gContent,
    gSider,
    gFooter
  },
  data() {
    return {};
  }
};
</script>

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
