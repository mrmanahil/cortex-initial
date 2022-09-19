import { Box } from 'grommet';
import { SettingsOption, User } from 'grommet-icons';
import InputBox from '../components/InputBox';
import SelectBox from '../components/SelectBox';

const MultiplierFormulaResult = () => {
  let marginRight = {
    marginRight: '10px',
  };

  return (
    <>
      <Box direction="row">
        <Box direction="column" style={marginRight} width="50%">
          <InputBox
            Icon={SettingsOption}
            Label="Multiplier Formula Result"
            placeholder="ResMult"
            helperText="Result Of Formula Above"
          />
        </Box>
        <SelectBox
          Icon={User}
          Label="Multiplier Formula Result Unit"
          placeholder="Formula Unit"
          helperText="Select A Unit From List"
        />
      </Box>
    </>
  );
};

export default MultiplierFormulaResult;
