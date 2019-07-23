<template>
  <div>
    <g-button-group>
      <g-button>默认按钮</g-button>
      <g-button icon="setting">默认按钮</g-button>
      <g-button icon="setting" iconRight>默认按钮</g-button>
      <g-button :loading="true">默认按钮</g-button>
      <g-button disabled>默认按钮</g-button>
    </g-button-group>

    <pre>
        <code>
            {{code}}
        </code>
    </pre>
  </div>
</template>

<script>
import gButton from "../../../src/button.vue";
import gButtonGroup from "../../../src/button-group.vue";
export default {
  components: {
    gButton,
    gButtonGroup
  },
  data() {
    return {
      code: `
      <g-button-group>
        <g-button>默认按钮</g-button>
        <g-button icon="setting">默认按钮</g-button>
        <g-button icon="setting" iconRight>默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
      </g-button-group>
     `
    };
  }
};
</script>