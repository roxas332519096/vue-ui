<template>
  <div class="wrapper" :class="{error}">
    <input
      :type="type"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    />
    <template v-if="error">
      <g-icon name="info" class="errorIcon"></g-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>
  </div>
</template>

<script>
import gIcon from "./icon";
export default {
  name: "gInput",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["text", "password"].indexOf(value) > 0;
      }
    }
  },
  components: { gIcon }
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$border-radius: 4px;
$padding: 0 8px;
$font-size: 14px;
$error-color: #f1453d;
.wrapper {
  display: inline-flex;
  align-items: center;
  font-size: $font-size;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    padding: $padding;
    height: $height;
    font-size: inherit;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: no-drop;
    }
  }
  &.error {
    > input {
      border-color: $error-color;
    }
    > .errorMessage {
      color: $error-color;
    }
    > .errorIcon {
      fill: $error-color;
    }
  }
}
</style>
