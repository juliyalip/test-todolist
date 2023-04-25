import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import MenuControlling from './index';

describe('test MenuControling component', () => {
  it('render correctly', () => {
    const initialItems = ['all', 'active', 'complited'];
    const { getByText } = renderWithProviders(
      <MenuControlling items={initialItems} />,
    );
    expect(getByText(/complited/i)).toBeInTheDocument();
    fireEvent.click(getByText('all'));
    fireEvent.click(getByText('active'));
    fireEvent.click(getByText('complited'));
  });
});
