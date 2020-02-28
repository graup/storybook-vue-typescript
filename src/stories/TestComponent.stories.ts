import TestComponent from '../components/TestComponent.vue';

export default {
  title: 'TestComponent',
};

export const Default = () => ({
  components: { TestComponent },
  template: `
    <test-component propTest="propTest" />
  `,
});
