import { Button } from 'grommet';
import { Close } from 'grommet-icons';

const CloseBtn = () => {
  let btnStyle = {
    width: '30px',
    padding: '0px',
    borderRadius: '0px',
    height: '32px',
    border: 'none',
    backgroundColor: '#0C2146',
  };

  return (
    <>
      <Button style={btnStyle} label={<Close color="white" />} />
    </>
  );
};

export default CloseBtn;
