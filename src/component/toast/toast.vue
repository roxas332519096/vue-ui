<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <span class="line" ref="line"></span>
      <span v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "gToast",
  props: {
    autoClose: {
      type: [Number, Boolean],
      default: 3,
      validator(value) {
        return value === false || typeof value === "number"
      }
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    toastClasses() {
      return { [`position-${this.position}`]: true };
    }
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-color: white;
$animation-duration: 0.3s;
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  &.position-top {
    top: 0;
    .toast {
      animation: slide-down $animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-up $animation-duration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  &.position-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: fade-in $animation-duration;
    }
  }
}
.toast {
  display: flex;
  align-items: center;
  min-height: $toast-min-height;
  padding: 0px 16px;
  font-size: $font-size;
  line-height: 1.8;
  background: $toast-bg;
  color: $toast-color;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .message {
    padding: 8px 0px;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 1;
    cursor: pointer;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>
