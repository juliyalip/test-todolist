import Hero from './index';
import { render } from '@testing-library/react';

describe('render baner', () => {
  it('render correctly', () => {
    render(<Hero />);
    const div = document.querySelector('div');
    expect(div).toBeInTheDocument();
  });
});
