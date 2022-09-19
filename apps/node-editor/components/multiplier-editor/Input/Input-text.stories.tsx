import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputField } from './InputBox';

export default {
  title: 'Components',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Input = Template.bind({});

Input.args = {
  Input: 'Input!',
  value: 'Value',
  Label: 'Input Multiplier',
  placeholder: 'Value',
  helperText: 'Value Inherited From',
  HelperTextLink: ' AAAAAA, BBBBBB, CCCCCC, DDDDDD',
};
