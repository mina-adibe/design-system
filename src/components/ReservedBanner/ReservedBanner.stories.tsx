import { Meta, Story } from '@storybook/react';
import ReservedBanner, { ReservedBannerProps } from './ReservedBanner';

export default {
  component: ReservedBanner,
  title: 'Components/Reserved Banner',
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

interface BannerStoryProps extends ReservedBannerProps {}

const Template: Story<BannerStoryProps> = (args) => <ReservedBanner {...args} />;

export const Default = Template.bind({});
