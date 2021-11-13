import { Meta, Story } from '@storybook/react';
import Banner, { BannerProps } from './Banner';

export default {
  component: Banner,
  title: 'Components/Banner',
  argTypes: {
    title: {
      control: 'text',
    },
    subTitle: {
      control: 'text',
    },
  },
  args: {
    title: 'Reserved!',
    subTitle: 'By Adam',
    color: 'primary',
  },
} as Meta;

interface BannerStoryProps extends BannerProps {}

const Template: Story<BannerStoryProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
