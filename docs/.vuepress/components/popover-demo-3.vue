<template>
  <div class="demo">
    <g-popover position="bottom">
      <template slot="content" slot-scope="{close}">
        <div>
          <span>Content</span>
          <g-button @click="close">Close</g-button>
        </div>
      </template>
      <g-button>Click</g-button>
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
