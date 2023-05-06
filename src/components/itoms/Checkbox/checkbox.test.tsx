import { render, fireEvent } from '@testing-library/react';
import Checkbox from './index';

describe('test checkbox', () => {
  it('prerender correctly', () => {
    const handleComplited = jest.fn();
    render(<Checkbox done={false} onComplited={handleComplited} id="001" />);
    const input = document.querySelector('input');
    const label = document.querySelector('label');
    const span = document.querySelector('span');
    expect(span).toHaveStyle({
      background:
        'linear-gradient(to right, rgba(248, 13, 221, 1), rgba(40, 73, 237, 1)',
    });
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    if (input) fireEvent.change(input);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
