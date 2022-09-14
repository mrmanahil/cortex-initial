import { Button } from 'grommet';
import { Refresh } from 'grommet-icons';

const RefreshBtn = () => {
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
      <Button style={btnStyle} label={<Refresh color="#76A9FF" />} />
    </>
  );
};

export default RefreshBtn;
