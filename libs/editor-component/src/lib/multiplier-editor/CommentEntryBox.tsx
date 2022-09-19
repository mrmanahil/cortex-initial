import { User } from 'grommet-icons';
import CommentBox from '../components/CommentBox';

const CommentEntryBox = () => {
  return (
    <>
      <CommentBox
        Icon={User}
        Label="Comment"
        placeholder="-- Enter Comment Here --"
      />
    </>
  );
};

export default CommentEntryBox;
