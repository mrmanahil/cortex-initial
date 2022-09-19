import { Button } from 'grommet';
import { User } from 'grommet-icons';
import InputBoxWithMultBtns from '../components/InputBoxWithMultBtns';

const FormulaBarValWithBtns = () => {
  return (
    <>
      <InputBoxWithMultBtns
        Icon={User}
        Label="Multiplier Formula"
        Button={Button}
        ValidateBtn="Validate"
        OverrideBtn="Override"
        placeholder="Formula"
        helperText="Multiplier Transformation Formula"
      />
    </>
  );
};

export default FormulaBarValWithBtns;
