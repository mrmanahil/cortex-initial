import { Box, Grommet } from 'grommet';
import AttributeVarTable from './AttributeVarTable';
import CommentEntryBox from './CommentEntryBox';
import FormulaBar from './FormulaBar';
import FormulaBarValWithBtns from './FormulaBarValWithBtns';
import MultiplierFormulaResult from './MultiplierFormulaResult';
import OutputMultiplier from './OutputMultiplier';
import UserMultipleValue from './UserMultipleValue';

const MultiplierEditor = () => {
  const TableContainer = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

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

  return (
    <Grommet
      theme={{
        global: {
          colors: {
            backgroundColor: '#0C2146',
            iconColor: '#76A9FF',
          },
        },
      }}
    >
      <Box
        width="large"
        background="backgroundColor"
        style={TableContainer}
        pad="small"
      >
        <FormulaBar />
        <AttributeVarTable
          border={border}
          borderBottom={borderBottom}
          unitColor={unitColor}
          tableData={tableData}
          iconWidth={iconWidth}
          label={label}
        />
        <FormulaBarValWithBtns />
        <MultiplierFormulaResult />
        <UserMultipleValue />
        <OutputMultiplier />
        <CommentEntryBox />
      </Box>
    </Grommet>
  );
};

export default MultiplierEditor;
