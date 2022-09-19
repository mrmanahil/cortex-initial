import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './select';

export default {
  title: 'Components',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectBox = Template.bind({});

SelectBox.args = {
  Select: 'Select!',
  Label: 'User Multiple Unit',
  placeholder: 'User Unit',
  helperText: 'Select A Unit From List',
};
