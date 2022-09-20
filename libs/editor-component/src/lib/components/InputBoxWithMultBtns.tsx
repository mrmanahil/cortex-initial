import { Box, Form, FormField, Text } from 'grommet';

const InputBoxWithMultBtns = ({
  Icon,
  Label,
  Button,
  ValidateBtn,
  OverrideBtn,
  placeholder,
  helperText,
}: any) => {
  let iconWidth = {
    width: '50px',
    marginLeft: '-10px',
  };

  let label = {
    marginBottom: '2px',
    marginLeft: '-2px',
    color: '#76A9FF',
  };

  let FormFieldBorderBottom = {
    borderBottom: '1px solid #76a9ff',
  };

  let validationError = {
    paddingLeft: '11px',
    paddingTop: '2px',
    color: '#828282',
  };

  let dangerBtn = {
    border: '1px solid #C8372D',
    background: '#C8372D',
    display: 'flex',
    marginLeft: 'auto',
  };

  let btnLeft = {
    display: 'flex',
    marginLeft: 'auto',
  };
  return (
    <>
      <Box direction="row" pad="xsmall">
        <Icon color="iconColor" style={iconWidth} />
        <Text style={label}>{Label}</Text>
        <Box direction="row" gap="xsmall" style={btnLeft}>
          <Button
            style={dangerBtn}
            label={ValidateBtn}
            onClick={() => console.log('Validate Btn')}
          />
          <Button
            style={dangerBtn}
            label={OverrideBtn}
            onClick={() => console.log('Override Btn')}
          />
        </Box>
      </Box>
      <Form color="white">
        <FormField
          placeholder={placeholder}
          margin="0"
          style={FormFieldBorderBottom}
        ></FormField>
      </Form>
      <span style={validationError}>{helperText}</span>
    </>
  );
};

export default InputBoxWithMultBtns;
