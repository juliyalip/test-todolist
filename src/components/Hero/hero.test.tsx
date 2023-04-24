import Hero from './index';
import { render, screen } from '@testing-library/react';

describe('render baner', () => {
  it('render correctly', () => {
    render(<Hero />);
  });
});
