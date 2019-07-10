<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = val => {
  let keys = Object.keys(val);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "gCol",
  props: {
    span: {
      type: [Number, String],
      default: 24
    },
    offset: {
      type: [Number, String]
    },
    xs: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: null
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRigt: this.gutter / 2 + "px"
      };
    },
    colClass() {
      let { span, offset, xs, sm, md, lg, xl } = this;
      let xsClass = xs
        ? [xs.span && `col-xs-${xs.span}`, xs.offset && `col-xs-${xs.offset}`]
        : [];
      let smClass = sm
        ? [sm.span && `col-sm-${sm.span}`, sm.offset && `col-sm-${sm.offset}`]
        : [];
      let mdClass = md
        ? [md.span && `col-md-${md.span}`, xs.offset && `col-md-${xs.offset}`]
        : [];
      let lgClass = lg
        ? [lg.span && `col-sm-${lg.span}`, lg.offset && `col-lg-${lg.offset}`]
        : [];
      let xlClass = xl
        ? [xl.span && `col-sm-${xl.span}`, xl.offset && `col-xl-${xs.offset}`]
        : [];
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...xsClass,
        ...smClass,
        ...mdClass,
        ...lgClass,
        ...xlClass
      ];
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  //xs
  @media (max-width: 768px) {
    $class-prefix: col-xs-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-xs-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  //sm
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: col-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  //md
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: col-md-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-md-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  //lg
  @media (min-width: 1201px) and (max-width: 1920px) {
    $class-prefix: col-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  //xl
  @media (min-width: 1921px) {
    $class-prefix: col-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
