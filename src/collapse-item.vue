<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "gCollapseItem",
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  inject: ["eventBus"],
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus.$emit("update:removeselected", this.name);
      } else {
        this.eventBus.$emit("update:addselected", this.name);
      }
    }
  },
  mounted() {
    this.eventBus.$on("update:selected", names => {
      if (names.indexOf(this.name) >= 0) {
        this.open = true;
      } else {
        this.open = false;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  > .title {
    display: flex;
    align-items: center;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    padding: 0 8px;
    min-height: 32px;
    border: 1px solid red;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .content {
    padding: 0 8px;
  }
}
</style>
