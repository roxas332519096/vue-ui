<template>
  <div class="popover" @click="onClick">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visiable"
      :class="{[`position-${position}`]:true}"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block">
      <slot></slot>
    </span>
    <div class="wrapper"></div>
  </div>
</template>

<script>
export default {
  name: "gPopover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      visiable: false
    };
  },
  methods: {
    positionContent() {
      //使内容区在body的最后
      const { triggerWrapper, contentWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let { top, left, width, height } = triggerWrapper.getBoundingClientRect();
      let {
        height: height2,
        width: width2
      } = contentWrapper.getBoundingClientRect();
      if (this.position === "top") {
        contentWrapper.style.left = left + window.scrollX + "px";
        contentWrapper.style.top = top - height2 + window.scrollY + "px";
      } else if (this.position === "bottom") {
        contentWrapper.style.left = left + window.scrollX + "px";
        contentWrapper.style.top = top + window.scrollY + height + "px";
      } else if (this.position === "left") {
        contentWrapper.style.top =
          top + (height - height2) / 2 + window.scrollY + "px";
        contentWrapper.style.left = left - width2 - window.scrollX + "px";
      } else if (this.position === "right") {
        contentWrapper.style.top =
          top + (height - height2) / 2 + window.scrollY + "px";
        contentWrapper.style.left = left + width + window.scrollX + "px";
      }
    },
    onClickDocument(e) {
      if (!this.$refs.contentWrapper.contains(e.target)) {
        //点击非content部分
        this.close();
      }
    },
    open() {
      this.visiable = true;
      setTimeout(() => {
        //异步添加监听
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visiable = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        //点击按钮部分
        if (this.visiable === true) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.content-wrapper {
  position: absolute;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: #fff;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }
  &.position-top {
    margin-top: -10px;
    &::before,
    &::after {
      left: 10;
    }
    &::before {
      top: 100%;
      border-top-color: $border-color;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: #fff;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10;
    }
    &::before {
      bottom: 100%;
      border-bottom-color: $border-color;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: #fff;
    }
  }
  &.position-left {
    margin-left: -10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      left: 100%;
      border-left-color: $border-color;
    }
    &::after {
      left: calc(100% - 1px);
      border-left-color: #fff;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      right: 100%;
      border-right-color: $border-color;
    }
    &::after {
      right: calc(100% - 1px);
      border-right-color: #fff;
    }
  }
}

</style>


