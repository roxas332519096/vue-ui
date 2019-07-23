<template>
  <div>
    <div class="demo">
      <g-row>
        <g-col>
          <div class="grid-content bg-purple-dark"></div>
        </g-col>
      </g-row>
    </div>
    <div class="demo">
      <g-row>
        <g-col span="12">
          <div class="grid-content bg-purple-dark"></div>
        </g-col>
        <g-col span="12">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
      </g-row>
    </div>
    <div class="demo">
      <g-row>
        <g-col span="8">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col span="8">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
        <g-col span="8">
          <div class="grid-content bg-purple-dark"></div>
        </g-col>
      </g-row>
    </div>
    <div class="demo">
      <g-row>
        <g-col span="4">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col span="4">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
        <g-col span="4">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col span="4">
          <div class="grid-content bg-purple-light"></div>
        </g-col>
        <g-col span="4">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col span="4">
          <div class="grid-content bg-purple-light"></div>
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
