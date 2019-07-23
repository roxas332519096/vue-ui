<template>
  <div class="demo">
      <g-input type="password" v-model="input"></g-input>
  </div>
</template>

<script>
import gIcon from "../../../src/icon.vue";
import gInput from "../../../src/input.vue";
export default {
  components: {
    gIcon,
    gInput
  },
  data() {
    return {
        input:''
    };
  }
};
</script>

<style>
.demo{
  margin-bottom: 20px;
}
</style>
