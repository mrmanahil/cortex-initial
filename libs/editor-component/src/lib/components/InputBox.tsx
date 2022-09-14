import { Box, Form, FormField, Text } from 'grommet';

const InputBox = ({
  Icon,
  Label,
  placeholder,
  helperText,
  Button,
  ButtonLabel,
  HelperTextLink,
  Select,
  SelectPlaceholder,
  options,
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
    border: '1px solid red',
    background: 'red',
    display: 'flex',
    marginLeft: 'auto',
  };

  let systemJoinLink = {
    color: '#76A9FF',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  return (
    <>
      <Box direction="row" pad="xsmall">
        <Icon color="#76A9FF" style={iconWidth} />
        <Text style={label}>{Label}</Text>
        {Button ? <Button style={dangerBtn} label={ButtonLabel} /> : null}
      </Box>
      <Form color="white">
        <FormField
          placeholder={placeholder}
          margin="0"
          style={FormFieldBorderBottom}
        >
          {Select ? (
            <Select
              name="select"
              placeholder={SelectPlaceholder}
              options={options}
              valueKey="value"
            />
          ) : null}
        </FormField>
      </Form>
      <span style={validationError}>
        {helperText}
        {HelperTextLink ? (
          <span style={systemJoinLink}>{HelperTextLink}</span>
        ) : null}
      </span>
    </>
  );
};

export default InputBox;
