import { renderWithProviders } from 'utils/test-utils';
import MenuControlling from './index';

describe('test MenuControling component', () => {
  it('render correctly', () => {
    const initialItems = ['all', 'active', 'complited'];
    const { getByText, getByTestId } = renderWithProviders(
      <MenuControlling items={initialItems} />,
    );
   
    expect(getByText(/complited/i)).toBeInTheDocument();
    expect(getByText(/active/i)).toBeInTheDocument();
    expect(getByText(/all/i)).toBeInTheDocument();
    expect(getByTestId('result')).toBeInTheDocument();
  });
});
