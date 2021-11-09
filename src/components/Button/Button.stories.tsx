import Button, { ButtonProps } from "./Button";
import {Meta, Story} from '@storybook/react';

export default {
  component: Button,
  title: "Components/Form/Custom Button",
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { text: 'Primary button!' };

export const Secondary = Template.bind({});
Secondary.args = { text: 'Secondary button!' };
