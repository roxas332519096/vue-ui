<template>
  <div class="tabsPane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gTabsPane",
  props: {
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
        active: this.active
      };
    }
  },
  created() {
    this.eventBus.$on("updated:selected", name => {
      this.active = name === this.name;
    });
  }
};
</script>

<style lang="scss" scoped>
.tabsPane {
    padding: 1em;
}
</style>
