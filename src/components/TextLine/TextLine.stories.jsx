import React from 'react';

import TextLine from './TextLine';

export default {
  title: 'Components/Text Line',
  component: TextLine,
  args: {
    label: "This is a dummy text line",
  },
  argTypes: {
    label: { control: 'text' },
  },
  parameters: {
    theme: 'light'
  }
};

const Template = (args) => <TextLine {...args} />;

export const Default = Template.bind({});

export const DarkLine = Template.bind({});
DarkLine.parameters = {
  theme: 'dark'
}
