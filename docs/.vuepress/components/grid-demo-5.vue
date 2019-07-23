<template>
  <div>
    <div class="demo">
      <g-row>
        <g-col :xs="{span:8}" :sm="{span:6}" :md="{span:4}" :lg="{span:3}" :xl="{span:1}">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :xs="{span:4}" :sm="{span:6}" :md="{span:8}" :lg="{span:9}" :xl="{span:11}">
          <div class="grid-content bg-purple-dark"></div>
        </g-col>
        <g-col :xs="{span:4}" :sm="{span:6}" :md="{span:8}" :lg="{span:9}" :xl="{span:11}">
          <div class="grid-content bg-purple"></div>
        </g-col>
        <g-col :xs="{span:8}" :sm="{span:6}" :md="{span:4}" :lg="{span:3}" :xl="{span:1}">
          <div class="grid-content bg-purple-dark"></div>
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
