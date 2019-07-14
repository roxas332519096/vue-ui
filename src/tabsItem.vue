<template>
  <div class="tabsItem" @click="onClick" :class="classes">
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
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },
  created() {
    this.eventBus.$on("updated:selected", name => {
      this.active = name === this.name;
    });
    console.log(this.disabled)
  },
  methods: {
    onClick() {
      if (this.disabled) return;
      this.eventBus.$emit("updated:selected", this.name, this);
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: blue;
.tabsItem {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  &.active {
    color: $blue;
  }
  &.disabled {
    color: #ddd;
    cursor: no-drop;
  }
}
</style>
