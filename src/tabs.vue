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
  created() {
    //   this.eventBus.$on("updated:selected", (name)=>{
         
    //   });
  },
  mounted(){
      this.eventBus.$emit('updated:selected',this.selected)
  }
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
