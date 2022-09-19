import { Box, Grommet } from 'grommet';
import { User } from 'grommet-icons';
import SelectBox from 'libs/editor-component/src/lib/components/SelectBox';

export interface TestProps {
  Select: string;
  Label: string;
  placeholder: string;
  helperText: string;
}

export const Select = (props: TestProps) => {
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
          <Box direction="row">
            <SelectBox
              Icon={User}
              Label={props?.Label}
              placeholder={props?.placeholder}
              helperText={props?.helperText}
            />
          </Box>
        </Box>
      </Grommet>
    </>
  );
};
