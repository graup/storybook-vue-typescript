<template>
  <button class="button" :disabled="isDisabled" @click="$emit('click')">
  	<slot></slot>
  </button>
</template>
 
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
});
</script>


<style lang="scss">

.button {
  display: flex;
  
  font-size: .9em;
  padding: .75em 3em;
  background: #D8D8D8;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  text-align: center;

  &[disabled] {
    color: #fff;
  }
}

</style>
