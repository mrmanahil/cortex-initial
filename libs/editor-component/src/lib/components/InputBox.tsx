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
  value,
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
    borderBottom: '1px solid #76A9FF',
    // fontSize: '15px',
    padding: '0px',
  };

  let validationError = {
    paddingLeft: '10px',
    color: '#828282',
  };

  let dangerBtn = {
    border: '1px solid #C8372D',
    background: '#C8372D',
    display: 'flex',
    marginLeft: 'auto',
  };

  let systemJoinLink = {
    color: '#2979FF',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  let padding = {
    padding: '0px',
    margin: '0px',
  };

  return (
    <>
      <Box direction="row" pad="xsmall">
        <Icon color="iconColor" style={iconWidth} />
        <Text style={label}>{Label}</Text>
        {Button ? <Button style={dangerBtn} label={ButtonLabel} /> : null}
      </Box>
      <Form style={padding}>
        <FormField
          placeholder={placeholder}
          margin="0"
          style={FormFieldBorderBottom}
          type="text"
          value={value}
        >
          {Select ? (
            <Select
              style={padding}
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
