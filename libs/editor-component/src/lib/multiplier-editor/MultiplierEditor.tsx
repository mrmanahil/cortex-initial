import { Box, Grommet } from 'grommet';
import AttributeVarTable from './AttributeVarTable';
import CommentEntryBox from './CommentEntryBox';
import FormulaBar from './FormulaBar';
import FormulaBarValWithBtns from './FormulaBarValWithBtns';
import MeasurementUnit from './MeasurementUnit';
import OverRideValue from './OverRideValue';
import TextBox from './textbox/TextBox';
import TextFieldWithBtn from './textbox/TextFieldWithBtn';
import TextFieldWithHyperlinks from './textbox/TextFieldWithHyperlinks';
import TextFieldWithMultVal from './textbox/TextFieldWithMultVal';

const MultiplierEditor = () => {
  const TableContainer = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <Grommet>
      <Box width="large" background="#0c2146" style={TableContainer}>
        <FormulaBar />
        <AttributeVarTable />
        <MeasurementUnit />
        <TextBox />
        <TextFieldWithBtn />
        <TextFieldWithHyperlinks />
        <TextFieldWithMultVal />
        <OverRideValue />
        <FormulaBarValWithBtns />
        <CommentEntryBox />
      </Box>
    </Grommet>
  );
};

export default MultiplierEditor;
