import { Box } from 'atomic-layout';
import { Form, FormField, Text } from 'grommet';
import { User } from 'grommet-icons';
import InputBox from '../components/InputBox';

const FormulaBar = () => {
  return (
    <>
      <InputBox
        Icon={User}
        Label="Multiplier Formula"
        placeholder="Formula"
        helperText="Multiplier Transformation Formula"
      />
    </>
  );
};

export default FormulaBar;
