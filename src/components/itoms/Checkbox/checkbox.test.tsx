import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './index';

describe('test checkbox', () => {
  const handleComplited = jest.fn();
  it('prerender correctly', () => {
    render(<Checkbox done={false} onComplited={handleComplited} id="001" />);
    const checkbox = screen.getByRole('checkbox');
    userEvent.dblClick(checkbox);
    expect(handleComplited).toBeCalledTimes(2);
    expect(checkbox).not.toBeChecked();
    const label = document.querySelector('label');
    expect(label).toBeInTheDocument();
    const span = document.querySelector('span');
    expect(span).toHaveStyle({
      background:
        'linear-gradient(to right, rgba(248, 13, 221, 1), rgba(40, 73, 237, 1)',
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
