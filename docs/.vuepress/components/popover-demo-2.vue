<template>
  <div class="demo">
    <g-popover position="top">
      <template slot="content">
        <div>content</div>
      </template>
      <g-button>Click</g-button>
    </g-popover>
    <g-popover position="top" trigger="hover">
      <template slot="content">
        <div>content</div>
      </template>
      <g-button>Hover</g-button>
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
