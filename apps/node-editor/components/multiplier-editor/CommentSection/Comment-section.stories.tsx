import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentSec } from './commentSection';

export default {
  title: 'Components',
  component: CommentSec,
} as ComponentMeta<typeof CommentSec>;

const Template: ComponentStory<typeof CommentSec> = (args) => (
  <CommentSec {...args} />
);

export const CommentBox = Template.bind({});

CommentBox.args = {
  Input: 'Input!',
  value: 'Value',
  Label: 'Input Multiplier',
  placeholder: 'Value',
};
