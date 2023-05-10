import Alert from './index';
import { render, screen } from '@testing-library/react';

describe('Alert component', () => {
  test('render correctly', () => {
    render(<Alert />);
    const textElement = screen.getByText(
      'The file is empty. Please, enter something.',
    );
    expect(textElement).toBeInTheDocument();
    expect(textElement).toMatchSnapshot()
  });
});
