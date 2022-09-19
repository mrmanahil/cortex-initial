import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Text,
} from 'grommet';
import { SettingsOption } from 'grommet-icons';

const AttributeVarTable = ({
  iconWidth,
  label,
  border,
  tableData,
  unitColor,
  borderBottom,
}: any) => {
  return (
    <>
      <Box direction="row" pad="xsmall">
        <SettingsOption color="iconColor" style={iconWidth} />
        <Text style={label}>Multiplier Formula Variables</Text>
      </Box>
      <Table align="center">
        <TableHeader>
          <TableRow style={border}>
            <TableCell scope="col" border={{ size: '0px' }}>
              Attribute ID
            </TableCell>
            <TableCell scope="col" border={{ size: '0px' }}>
              Attribute Variable
            </TableCell>
            <TableCell scope="col" border={{ size: '0px' }}>
              Attribute Value
            </TableCell>
            <TableCell scope="col" border={{ size: '0px' }}>
              Attribute Unit
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item: any, index: any) => {
            return (
              <TableRow>
                <TableCell scope="row" style={unitColor} key={index}>
                  {item.attrId}
                </TableCell>
                <TableCell style={borderBottom}>{item.attrVariable}</TableCell>
                <TableCell style={unitColor}>{item.attrValue}</TableCell>
                <TableCell style={unitColor}>{item.attrUnit}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default AttributeVarTable;
