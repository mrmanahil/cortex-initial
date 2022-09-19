import { Box, Grommet } from 'grommet';
import InputBox from 'libs/editor-component/src/lib/components/InputBox';
import { SettingsOption } from 'grommet-icons';

export interface TestProps {
  Input: string;
  value: string;
  Label: string;
  placeholder: string;
  helperText: string;
  HelperTextLink: string;
}

export const InputField = (props: TestProps) => {
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
          <InputBox
            Icon={SettingsOption}
            Label={props.Label}
            placeholder={props.placeholder}
            helperText={props.helperText}
            HelperTextLink={props.HelperTextLink}
            value={props.value}
          />
        </Box>
      </Grommet>
    </>
  );
};
