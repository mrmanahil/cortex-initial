import { SettingsOption } from 'grommet-icons';
import InputBox from '../../components/InputBox';

const TextFieldWithHyperlinks = () => {
  return (
    <>
      <InputBox
        Icon={SettingsOption}
        Label="System Join Type"
        placeholder="Value"
        helperText="Value Inherited From"
        HelperTextLink=" FFFFFF"
      />
    </>
  );
};

export default TextFieldWithHyperlinks;
