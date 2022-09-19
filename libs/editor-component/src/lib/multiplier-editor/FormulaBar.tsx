import { Box } from 'grommet';
import { SettingsOption } from 'grommet-icons';
import InputBox from '../components/InputBox';

const FormulaBar = () => {
  let marginRight = {
    marginRight: '10px',
  };

  let marginLeft = {
    marginLeft: '10px',
  };

  return (
    <>
      <InputBox
        Icon={SettingsOption}
        Label="Input Multiplier"
        placeholder="Value"
        helperText="Value Inherited From"
        HelperTextLink=" AAAAAA, BBBBBB, CCCCCC, DDDDDD"
      />
      <Box direction="row">
        <Box direction="column" style={marginRight} width="50%">
          <InputBox
            Icon={SettingsOption}
            Label="Input Multiplier"
            placeholder="Value Unit"
            helperText="Value Inherited From "
            HelperTextLink="FFFFFF"
          />
        </Box>
        <Box direction="column" style={marginLeft} width="50%">
          <InputBox
            Icon={SettingsOption}
            Label="Splitting Ratio"
            placeholder="Ratio"
          />
        </Box>
      </Box>
    </>
  );
};

export default FormulaBar;
