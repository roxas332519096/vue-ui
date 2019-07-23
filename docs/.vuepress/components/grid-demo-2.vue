<template>
  <div>
    <div class="demo">
      <g-row gutter="20">
        <g-col span="6">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col span="6">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
        <g-col span="6">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col span="6">
          <div class="grid-content bg-purple"></div>
        </g-col>
      </g-row>
    </div>
  </div>
</template>

<script>
import gRow from "../../../src/row.vue";
import gCol from "../../../src/col.vue";
export default {
  components: {
    gRow,
    gCol
  },
  data() {
    return {};
  }
};
</script>

<style>
*{
  box-sizing: border-box;
}
.demo {
  margin-top: 10px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
