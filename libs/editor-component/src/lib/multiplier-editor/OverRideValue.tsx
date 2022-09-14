import { Button, Select } from 'grommet';
import { User } from 'grommet-icons';
import InputBox from '../components/InputBox';

const OverRideValue = () => {
  const options = [
    { label: 'option 1', value: 1 },
    { label: 'option 2', value: 2 },
    { label: 'option 3', value: 3 },
  ];

  return (
    <>
      <InputBox
        Icon={User}
        Label="User Value"
        placeholder="Value"
        helperText="User Value Overrides System Value"
        Button={Button}
        ButtonLabel="Override"
        Select={Select}
        SelectPlaceholder="Value"
        options={options}
      />
    </>
  );
};

export default OverRideValue;
