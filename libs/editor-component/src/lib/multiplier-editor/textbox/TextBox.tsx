import { SettingsOption } from 'grommet-icons';
import InputBox from '../../components/InputBox';

const TextBox = () => {
  return (
    <>
      <InputBox
        Icon={SettingsOption}
        Label="Attribute Name"
        placeholder="Name"
        helperText="A reference to the Attribute"
      />
    </>
  );
};

export default TextBox;
