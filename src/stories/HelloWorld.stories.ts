import { storiesOf } from '@storybook/vue';
import MyButton from '../components/Button.vue';

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button>with text</my-button>',
  }))
  .add('with emoji', () => ({
    components: { MyButton },
    template: '<my-button>😀 😎 👍 💯</my-button>',
  }))
  .add('as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>',
  }));
