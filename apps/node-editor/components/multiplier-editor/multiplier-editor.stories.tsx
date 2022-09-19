import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MultiplierEditor } from './multiplier';

export default {
  title: 'Multiplier Editor',
  component: MultiplierEditor,
} as ComponentMeta<typeof MultiplierEditor>;

const Template: ComponentStory<typeof MultiplierEditor> = (args) => (
  <MultiplierEditor {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'Multiplier Editor!',
};
