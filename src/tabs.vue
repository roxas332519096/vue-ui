<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "gTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) !== -1;
      }
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  created() {},
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "gTabsHead") {
        vm.$children.forEach(item => {
          if (
            item.$options.name === "gTabsItem" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("updated:selected", this.selected,item);
          }
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
