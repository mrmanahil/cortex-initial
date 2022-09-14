import { Button } from 'grommet';
import { User } from 'grommet-icons';
import InputBox from '../../components/InputBox';

const TextFieldWithBtn = () => {
  return (
    <>
      <InputBox
        Icon={User}
        Label="User Value"
        placeholder="Value"
        helperText="Helper Message"
        Button={Button}
        ButtonLabel="Override"
      />
    </>
  );
};
export default TextFieldWithBtn;
