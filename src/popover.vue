<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visiable"  @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gPopover",
  data() {
    return {
      visiable: false
    };
  },
  methods: {
    xxx() {
      this.visiable = !this.visiable;
      if (this.visiable === true) {
        setTimeout(() => {
          let eventHandler = () => {
            this.visiable = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  position: absolute;
  display: inline-block;
  vertical-align: top;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
