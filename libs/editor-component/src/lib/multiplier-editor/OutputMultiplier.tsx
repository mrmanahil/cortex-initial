import { SettingsOption } from 'grommet-icons';
import InputBox from '../components/InputBox';

const OutputMultiplier = () => {
  return (
    <InputBox
      Icon={SettingsOption}
      Label="Output Multiplier"
      placeholder="Output Value Output Unit"
      helperText="Value transformed by above formula and variables"
    />
  );
};

export default OutputMultiplier;
