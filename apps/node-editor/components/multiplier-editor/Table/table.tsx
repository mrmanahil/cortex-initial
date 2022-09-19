import { Box, Grommet } from 'grommet';
import AttributeVarTable from 'libs/editor-component/src/lib/multiplier-editor/AttributeVarTable';

export interface TestProps {
  border: any;
  borderBottom: any;
  unitColor: any;
  tableData: any;
  iconWidth: any;
  label: any;
}

export const Table = (props: TestProps) => {
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
          <AttributeVarTable
            border={props.border}
            borderBottom={props.borderBottom}
            unitColor={props.unitColor}
            tableData={props.tableData}
            iconWidth={props.iconWidth}
            label={props.label}
          />
        </Box>
      </Grommet>
    </>
  );
};
