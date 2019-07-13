<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gRow",
  props: {
    gutter: {
      type: [String, Number]
    },
    align:{
      type:String,
      validator(value){
        return ['left','right','center'].indexOf(value) >= 0
      } 
    }
  },
  data() {
    return {};
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    },
    rowClass(){
      return this.align && `align-${this.align}`
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-center{
    justify-content: center
  }
  &.align-left{
    justify-content:left
  }
  &.align-right{
    justify-content: right
  }
}
</style>
