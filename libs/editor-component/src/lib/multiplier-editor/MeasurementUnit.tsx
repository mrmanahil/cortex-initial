import { Box } from 'grommet';
import { User, SettingsOption } from 'grommet-icons';
import SelectBox from '../components/SelectBox';

const MeasurementUnit = () => {
  return (
    <>
      <Box direction="row" pad="xsmall">
        <SelectBox
          Icon={SettingsOption}
          Label="Unit"
          placeholder="Value"
          helperText="Helper Message"
        />
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

export default MeasurementUnit;
