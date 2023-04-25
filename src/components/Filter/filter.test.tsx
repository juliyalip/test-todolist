import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import Filter from './index';

describe('test Filter component', () => {
  beforeEach(() => {
    renderWithProviders(<Filter />);
  });

  it('render filter component', () => {
    const input = document.querySelector('input');
    expect(input).toBeInTheDocument();
    if (input) fireEvent.change(input);
  });
});
