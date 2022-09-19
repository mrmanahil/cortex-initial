import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from './table';

export default {
  title: 'Components',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

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

export const TableBox = Template.bind({});

TableBox.args = {
  border: border,
  borderBottom: borderBottom,
  unitColor: unitColor,
  tableData: tableData,
  iconWidth: iconWidth,
  label: label,
};
