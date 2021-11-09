import '../packages/hello-world/dist';

export default {
  title: 'Example/HelloWorld',
  argTypes: {
    name: { control: 'text' },
  },
};

const Template = (args) => {
  const { name } = args;

  if (name) {
    return `<hello-world name=${name}></hello-world>`
  }

  return `<hello-world></hello-world>`
};

export const Hello = Template.bind({});