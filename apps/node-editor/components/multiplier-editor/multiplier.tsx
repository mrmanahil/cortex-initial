import { Box, Grommet } from 'grommet';
import AttributeVarTable from 'libs/editor-component/src/lib/multiplier-editor/AttributeVarTable';
import CommentEntryBox from 'libs/editor-component/src/lib/multiplier-editor/CommentEntryBox';
import FormulaBar from 'libs/editor-component/src/lib/multiplier-editor/FormulaBar';
import FormulaBarValWithBtns from 'libs/editor-component/src/lib/multiplier-editor/FormulaBarValWithBtns';
import MultiplierFormulaResult from 'libs/editor-component/src/lib/multiplier-editor/MultiplierFormulaResult';
import OutputMultiplier from 'libs/editor-component/src/lib/multiplier-editor/OutputMultiplier';
import UserMultipleValue from 'libs/editor-component/src/lib/multiplier-editor/UserMultipleValue';
import React from 'react';

export interface TestProps {
  text: string;
  border: any;
  borderBottom: any;
  unitColor: any;
  tableData: any;
  iconWidth: any;
  label: any;
}

export const MultiplierEditor = (props: TestProps) => {
  const TableContainer = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <>
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
            border={props.border}
            borderBottom={props.borderBottom}
            unitColor={props.unitColor}
            tableData={props.tableData}
            iconWidth={props.iconWidth}
            label={props.label}
          />
          <FormulaBarValWithBtns />
          <MultiplierFormulaResult />
          <UserMultipleValue />
          <OutputMultiplier />
          <CommentEntryBox />
        </Box>
      </Grommet>
    </>
  );
};
