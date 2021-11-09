import "../packages/convert-uppercase/dist";
import { Story, Meta } from "@storybook/html";

export default {
  title: "Example/ConvertUppercase",
  argTypes: {
    name: { control: "text" },
  },
} as Meta;

const Template: Story<{
  name?: string;
}> = (args) => {
  const { name } = args;

  if (name) {
    return `<convert-uppercase value=${name}></convert-uppercase>`;
  }

  return `<convert-uppercase></convert-uppercase>`;
};

export const ConvertUppercase = Template.bind({});
