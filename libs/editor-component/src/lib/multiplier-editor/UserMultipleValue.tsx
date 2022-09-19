import { Box } from 'grommet';
import { User } from 'grommet-icons';
import InputBox from '../components/InputBox';
import SelectBox from '../components/SelectBox';

const UserMultipleValue = () => {
  let marginRight = {
    marginRight: '10px',
  };
  return (
    <>
      <Box direction="row">
        <Box direction="column" style={marginRight} width="50%">
          <InputBox
            Icon={User}
            Label="User Multiple Value"
            placeholder="User Value"
            helperText="Overrides all other values"
          />
        </Box>
        <SelectBox
          Icon={User}
          Label="User Multiple Unit"
          placeholder="User Unit"
          helperText="Select A Unit From List"
        />
      </Box>
    </>
  );
};

export default UserMultipleValue;
