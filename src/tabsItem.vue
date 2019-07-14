<template>
  <div class="tabsItem" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  computed:{
      classes(){
          return {
              active:this.active
          }
      }
  },
  created() {
    this.eventBus.$on("updated:selected", name => {
      this.active = name === this.name;
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("updated:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabsItem {
  flex-shrink: 0;
  padding: 0 2em;
  &.active{
      background: red;
  }
}
</style>
