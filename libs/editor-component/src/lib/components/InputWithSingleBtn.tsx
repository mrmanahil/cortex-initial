import { Box, Button, Form, FormField, Text } from 'grommet';

const InputWithSingleBtn = ({
  Icon,
  Label,
  placeholder,
  value,
  helperText,
  singleLink,
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
    padding: '0px',
  };

  let validationError = {
    paddingLeft: '10px',
    color: '#828282',
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
      </Box>
      <Form style={padding}>
        <FormField
          placeholder={placeholder}
          margin="0"
          style={FormFieldBorderBottom}
          type="text"
          value={value}
        ></FormField>
      </Form>
      <span style={validationError}>
        {helperText}
        {singleLink ? (
          <span>
            <Button
              style={systemJoinLink}
              onClick={() => console.log('Single Link')}
            >
              {singleLink}
            </Button>
          </span>
        ) : null}
      </span>
    </>
  );
};

export default InputWithSingleBtn;
