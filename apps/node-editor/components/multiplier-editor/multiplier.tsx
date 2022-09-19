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
          <AttributeVarTable />
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
