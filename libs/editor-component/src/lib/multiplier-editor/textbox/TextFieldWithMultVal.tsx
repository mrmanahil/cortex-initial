import { SettingsOption } from 'grommet-icons';
import InputBox from '../../components/InputBox';

const TextFieldWithMultVal = () => {
  return (
    <>
      <InputBox
        Icon={SettingsOption}
        Label="System Value"
        placeholder="Value01, Value02, Value03, Value04"
        helperText="Value Inherited From"
        HelperTextLink=" AAAAAA, BBBBBB, CCCCCC, DDDDDD, EEEEEE"
      />
    </>
  );
};

export default TextFieldWithMultVal;
