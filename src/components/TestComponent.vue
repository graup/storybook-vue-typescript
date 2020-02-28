<template>
  <div>
    <p>$attrs: {{ $attrs }}</p>
    <p>$props: {{ $props }}</p>
    <p>data: {{ dataTest }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TestComponent extends Vue {
  @Prop({ type: String })
  public propTest: string = '';

  public dataTest: string = 'test1234';
}
</script>