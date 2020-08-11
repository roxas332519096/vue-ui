<template>
  <div class="demo">
    <g-popover position="top">
      <template slot="content">
        <div>content</div>
      </template>
      <g-button>Top</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        <div>content</div>
      </template>
      <g-button>Bottom</g-button>
    </g-popover>
    <g-popover position="left">
      <template slot="content">
        <div>content</div>
      </template>
      <g-button>Left</g-button>
    </g-popover>
    <g-popover position="right">
      <template slot="content">
        <div>content</div>
      </template>
      <g-button>Right</g-button>
    </g-popover>
  </div>
</template>

<script>
import gButton from "../../../src/button.vue";
import gPopover from "../../../src/popover.vue";
export default {
  components: {
    gButton,
    gPopover
  },
  data() {
    return {};
  }
};
</script>

<style>
.demo {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
