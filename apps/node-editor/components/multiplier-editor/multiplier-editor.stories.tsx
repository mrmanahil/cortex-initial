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

const border = {
  color: '#76a9ff',
  size: 'medium',
};
const borderBottom = {
  borderBottom: '2px solid #76A9FF',
};
const unitColor = {
  color: '#828282',
};

const tableData = [
  {
    attrId: '',
    attrVariable: 'InMult',
    attrValue: '99999.99',
    attrUnit: 'Unit',
  },
  {
    attrId: 'A1A1',
    attrVariable: 'Variable A',
    attrValue: '99999.99',
    attrUnit: 'Unit',
  },
  {
    attrId: 'B2B2',
    attrVariable: 'Variable A',
    attrValue: '99999.99',
    attrUnit: 'Unit',
  },
  {
    attrId: '',
    attrVariable: 'ResMult',
    attrValue: '99999.99',
    attrUnit: 'Unit',
  },
];

let iconWidth = {
  width: '50px',
  marginLeft: '-10px',
};

let label = {
  marginBottom: '2px',
  marginLeft: '-2px',
  color: '#76A9FF',
};

export const Multiplier = Template.bind({});

Multiplier.args = {
  text: 'Multiplier Editor!',
  border: border,
  borderBottom: borderBottom,
  unitColor: unitColor,
  tableData: tableData,
  iconWidth: iconWidth,
  label: label,
};
