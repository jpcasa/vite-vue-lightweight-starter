import { mount } from '@vue/test-utils';
import Button from './Button.vue';

it('testing works with default props', () => {
  const wrapper = mount(Button);
  
  expect(wrapper.props().text).toBe('Click me');
  expect(wrapper.props().type).toBe('primary');
  expect(wrapper.props().disabled).toBe(false);
});

it('button works different props', () => {
  const props = {
    text: 'Submit',
    type: 'secondary',
    disabled: true
  };

  const wrapper = mount(Button, { props });

  expect(wrapper.props().text).toBe(props.text);
  expect(wrapper.props().type).toBe(props.type);
  expect(wrapper.props().disabled).toBe(props.disabled);
});

it('renders button with text', () => {
  const text = 'Hola';
  const wrapper = mount(Button, {
    slots: {
      default: text
    },
    props: {
      text: null
    }
  });
  expect(wrapper.text()).toBe(text);
});