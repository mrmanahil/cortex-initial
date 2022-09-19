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
        <AttributeVarTable />
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
