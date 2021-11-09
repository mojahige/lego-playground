import "../packages/hello-world/dist";
import { Story, Meta } from '@storybook/html';

export default {
  title: "Example/HelloWorld",
  argTypes: {
    name: { control: "text" },
  },
} as Meta;

const Template: Story<{
  name?: string
}> = (args) => {
  const { name } = args;

  if (name) {
    return `<hello-world name=${name}></hello-world>`;
  }

  return `<hello-world></hello-world>`;
};

export const Hello = Template.bind({});
