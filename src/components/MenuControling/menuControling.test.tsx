import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import MenuControlling from './index';

describe('test MenuControling component', () => {
  it('render correctly', () => {
    const initialItems = ['all', 'active', 'complited'];
    const { getByText } = renderWithProviders(
      <MenuControlling items={initialItems} />,
    );
    const btnComplited = screen.getByText(/complited/i);
    const btnActive = screen.getByText(/active/i);
    const btnAll = screen.getByText(/all/i);
    const result = screen.getByTestId('result');
    expect(getByText(/complited/i)).toBeInTheDocument();
    expect(btnComplited).toBeInTheDocument();
    expect(btnActive).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
    expect(result).toBeInTheDocument();
  });
});
