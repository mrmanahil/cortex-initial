import { Box, FormField, Text, Select } from 'grommet';

const SelectBox = ({ Icon, Label, placeholder, helperText }: any) => {
  let iconWidth = {
    width: '40px',
    marginLeft: '-10px',
  };

  let label = {
    marginBottom: '2px',
    marginLeft: '-2px',
    color: '#76A9FF',
  };

  const options = [
    { label: 'Select 1', value: 1 },
    { label: 'Select 2', value: 2 },
    { label: 'Select 3', value: 3 },
  ];

  let validationError = {
    paddingLeft: '8px',
    paddingTop: '2px',
    color: '#828282',
  };

  let marginLeft = {
    marginLeft: '10px',
  };

  return (
    <>
      <Box direction="column" style={marginLeft} width="50%">
        <Box direction="row" pad="xsmall">
          <Icon color="iconColor" style={iconWidth} />
          <Text style={label}>{Label}</Text>
        </Box>
        <FormField name="select" margin="0px">
          <Select
            name="select"
            placeholder={placeholder}
            options={options}
            valueKey="value"
          />
        </FormField>
        <span style={validationError}>{helperText}</span>
      </Box>
    </>
  );
};

export default SelectBox;
