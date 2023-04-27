import { render, fireEvent } from '@testing-library/react';
import Checkbox from './index';

describe('test checkbox', () => {
  it('prerender correctly', () => {
    const handleComplited = jest.fn();
    render(<Checkbox done={false} onComplited={handleComplited} id="001" />);
    const input = document.querySelector('input');
    const label = document.querySelector('label');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    if (input) fireEvent.change(input);
  });
});
