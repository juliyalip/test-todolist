import { fireEvent } from '@testing-library/react';
import ControllingSection from './index';
import { renderWithProviders } from 'utils/test-utils';

describe('test ControllingSection', () => {
  it('render correctly', () => {
    const { getByText } = renderWithProviders(<ControllingSection />);
    expect(getByText(/Clear complited/i)).toBeInTheDocument();
    fireEvent.click(getByText('Clear complited'));
  });
});
