import { Box, Grommet } from 'grommet';
import { SettingsOption } from 'grommet-icons';
import InputWithMultipleLink from 'libs/editor-component/src/lib/components/InputWithMultipleLink';

export interface TestProps {
  Input: string;
  value: string;
  Label: string;
  placeholder: string;
  helperText: string;
  firstBtn: string;
  secondBtn: string;
  thirdBtn: string;
  fourthBtn: string;
  fifthBtn: string;
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
          <InputWithMultipleLink
            Icon={SettingsOption}
            Label={props.Label}
            placeholder={props.placeholder}
            helperText={props.helperText}
            firstBtn={props.firstBtn}
            secondBtn={props.secondBtn}
            thirdBtn={props.thirdBtn}
            fourthBtn={props.fourthBtn}
            value={props.value}
          />
        </Box>
      </Grommet>
    </>
  );
};
