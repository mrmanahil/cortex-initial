import { Box, Form, FormField, Text } from 'grommet';

const CommentBox = ({ Icon, Label, placeholder }: any) => {
  let iconWidth = {
    width: '50px',
    marginLeft: '-10px',
  };

  let label = {
    marginBottom: '2px',
    marginLeft: '-2px',
    color: '#76A9FF',
    height: '107px',
  };

  let FormFieldBorderBottom = {
    paddingBottom: '10px',
  };

  return (
    <>
      <Box direction="row" pad="xsmall">
        <Icon color="iconColor" style={iconWidth} />
        <Text style={label}>{Label}</Text>
      </Box>
      <Form>
        <FormField
          placeholder={placeholder}
          margin="0"
          style={FormFieldBorderBottom}
        ></FormField>
      </Form>
    </>
  );
};

export default CommentBox;
