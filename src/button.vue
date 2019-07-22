<template>
  <button class="g-button" :class="{right:iconRight,disabled:disabled}" @click="_click">
    <g-icon :name="icon" v-if="icon && !loading"></g-icon>
    <g-icon name="loading" class="loading" v-if="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import gIcon from "./icon.vue";
export default {
  name: "gButton",
  components: {
    gIcon
  },
  props: {
    icon: {
      type: String
    },
    iconRight: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    _click() {
      if (this.disabled) return;
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$button-bg: #fff;
$button-active-bg: #eee;
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 0 1em;
  height: $button-height;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  font-size: $font-size;
  background: $button-bg;
  cursor: pointer;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  &.right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }

  &.disabled {
    cursor: no-drop;
    color: #aaa;
    &:hover {
      border-color: $border-color;
    }
    &:active {
      background-color: $button-bg;
    }
  }

  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>