import { Box, Button, Form, FormField, Text } from 'grommet';
import { useState } from 'react';

const InputWithMultipleLink = ({
  Icon,
  Label,
  placeholder,
  value,
  helperText,
  firstBtn,
  secondBtn,
  thirdBtn,
  fourthBtn,
}: any) => {
  const [field, setField] = useState('');

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
    color: 'red',
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

  let validation = {
    paddingLeft: '10px',
    color: '#828282',
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
          value={field}
          onChange={(e) => setField(e.target.value)}
        ></FormField>
      </Form>
      <span style={field.length === 0 ? validationError : validation}>
        {helperText}
        <span style={systemJoinLink}>
          <Button
            style={systemJoinLink}
            onClick={() => console.log('First Button')}
          >
            {firstBtn + ', '}
          </Button>
          <Button
            style={systemJoinLink}
            onClick={() => console.log('Sec Button')}
          >
            {secondBtn + ', '}
          </Button>
          <Button
            style={systemJoinLink}
            onClick={() => console.log('Third Button')}
          >
            {thirdBtn + ', '}
          </Button>
          <Button
            style={systemJoinLink}
            onClick={() => console.log('Fourth Button')}
          >
            {fourthBtn}
          </Button>
        </span>
      </span>
    </>
  );
};

export default InputWithMultipleLink;
