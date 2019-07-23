<template>
  <div>
    <g-button disabled>默认按钮</g-button>
    <pre>
        <code>
            {{code}}
        </code>
    </pre>
  </div>
</template>

<script>
import gButton from "../../../src/button.vue";
export default {
  components: {
    gButton
  },
  data() {
    return {
      code: `
        <g-button disabled>默认按钮</g-button>
     `
    };
  }
};
</script>