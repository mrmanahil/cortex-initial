import { Box, Grommet } from 'grommet';
import { User } from 'grommet-icons';
import CommentBox from 'libs/editor-component/src/lib/components/CommentBox';

export interface TestProps {
  Input: string;
  Label: string;
  placeholder: string;
}

export const CommentSec = (props: TestProps) => {
  const TableContainer = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <>
      <Grommet
        theme={{
          global: {
            colors: {
              backgroundColor: '#0C2146',
              iconColor: '#76A9FF',
            },
          },
        }}
      >
        <Box
          width="large"
          background="backgroundColor"
          style={TableContainer}
          pad="small"
        >
          <CommentBox
            Icon={User}
            Label={props.Label}
            placeholder={props.placeholder}
          />
        </Box>
      </Grommet>
    </>
  );
};
