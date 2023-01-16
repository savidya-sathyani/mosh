import React from 'react';

import LinkButton from './LinkButton';

export default {
  title: 'Components/Link Button',
  component: LinkButton,
  args: {
    label: "Link Button",
    link: "dummy-link"
  },
  argTypes: {
    label: { control: 'text' },
    link: { control: 'text' },
    mode: { control: { type: 'select', options: ['Primary', 'Secondary'] } },
    onClick: { action: 'clicked' }
  },
  parameters: {
    theme: 'light'
  }
};

const Template = (args) => <LinkButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mode: 'Primary',
  label: 'Primary Link Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'Secondary',
  label: 'Secondary Link Button',
};

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  mode: 'Dark Primary',
  label: 'Dark Link Button',
};
DarkPrimary.parameters = {
  theme: 'dark'
}
