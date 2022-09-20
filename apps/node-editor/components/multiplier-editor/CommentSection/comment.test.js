import { render, screen } from '@testing-library/react';
import { Grommet } from 'grommet';
import CommentBox from 'libs/editor-component/src/lib/components/CommentBox';

test('Initial Input Fields Empty', () => {
  render(<CommentBox title="title" />);
  const getInput = screen.getByRole('textbox');
  expect(getInput.value).toBe('');
});
