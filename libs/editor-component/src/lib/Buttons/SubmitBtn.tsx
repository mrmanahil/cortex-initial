import { Button } from 'grommet';
import { Refresh } from 'grommet-icons';

const SubmitBtn = () => {
  let btnStyle = {
    width: '150px',
    padding: '0px',
    borderRadius: '6px',
    height: '26px',
    border: 'none',
    backgroundColor: '#76A9FF',
    fontSize: '16px',
  };

  return (
    <>
      <Button style={btnStyle} color="#0C2146" label="Submit" />
    </>
  );
};

export default SubmitBtn;
