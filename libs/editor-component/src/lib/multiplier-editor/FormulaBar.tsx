import { Box } from 'grommet';
import { SettingsOption } from 'grommet-icons';
import InputBox from '../components/InputBox';
import InputWithMultipleLink from '../components/InputWithMultipleLink';
import InputWithSingleBtn from '../components/InputWithSingleBtn';

const FormulaBar = () => {
  let marginRight = {
    marginRight: '10px',
  };

  let marginLeft = {
    marginLeft: '10px',
  };

  let helperTextLink = {
    firstBtn: 'AAAAAA',
    secondBtn: ' BBBBBB',
    thirdBtn: ' CCCCCC',
    fourthBtn: ' DDDDDD',
    fifthBtn: ' FFFFFF',
  };

  return (
    <>
      <InputWithMultipleLink
        Icon={SettingsOption}
        Label="Input Multiplier"
        placeholder="Value"
        helperText="Value Inherited From"
        firstBtn={helperTextLink.firstBtn}
        secondBtn={helperTextLink.secondBtn}
        thirdBtn={helperTextLink.thirdBtn}
        fourthBtn={helperTextLink.fourthBtn}
      />
      <Box direction="row">
        <Box direction="column" style={marginRight} width="50%">
          <InputWithSingleBtn
            Icon={SettingsOption}
            Label="Input Multiplier"
            placeholder="Value Unit"
            helperText="Value Inherited From "
            singleLink={helperTextLink.fifthBtn}
          />
        </Box>
        <Box direction="column" style={marginLeft} width="50%">
          <InputBox
            Icon={SettingsOption}
            Label="Splitting Ratio"
            placeholder="Ratio"
          />
        </Box>
      </Box>
    </>
  );
};

export default FormulaBar;
