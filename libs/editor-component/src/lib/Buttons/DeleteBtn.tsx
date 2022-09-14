import { Button } from 'grommet';
import { Trash } from 'grommet-icons';

const DeleteBtn = () => {
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
      <Button style={btnStyle} label={<Trash color="#76A9FF" />} />
    </>
  );
};

export default DeleteBtn;
