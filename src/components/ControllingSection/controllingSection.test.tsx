import { fireEvent} from '@testing-library/react';
import Todos from 'views/Todos';
import { renderWithProviders } from 'utils/test-utils';

const initionTodos = [
  { id: '001', text: 'I like React', done: true },
  { id: '002', text: 'I like Redux', done: true },
];

const renderComponent = () =>
  renderWithProviders(<Todos />, {
    preloadedState: {
      todos: initionTodos,
    },
  });

describe('test controling section', () => {
  it('Pre render correctly', () => {
    const { getByText } = renderComponent();
    
    expect(getByText(/I like React/)).toBeInTheDocument();
    expect(getByText(/I like Redux/)).toBeInTheDocument();
    expect(getByText(/Clear complited/)).toBeInTheDocument();
    expect(getByText(/Active/i)).toBeInTheDocument();
    expect(getByText(/All/i)).toBeInTheDocument();
    expect(getByText(/Completed/i)).toBeInTheDocument();

    fireEvent.click(getByText('Completed'));
  });

  it("click button 'completed'", () => {
    const { getByText, getByTestId } = renderComponent();
    const result = getByTestId('result');
    fireEvent.click(getByText('Completed'));

    expect(result.textContent).toBe('2 items');
  });

  it("click on button 'active'", () => {
    const { getByText, getByTestId } = renderComponent();
    const result = getByTestId('result');
    fireEvent.click(getByText(/Active/i));

    expect(result.textContent).toBe('0 items');
  });

  it("click on button 'all'", () => {
    const { getByText, getByTestId } = renderComponent();
    const result = getByTestId('result');
    fireEvent.click(getByText(/All/i));

    expect(result.textContent).toBe('2 items');
  });

  it('get result after delete all complited todos', () => {
    const { getByText, queryByText } = renderComponent();

    expect(queryByText(/Data not found/i)).toBeNull();
    
    fireEvent.click(getByText(/Clear complited/i));

    expect(getByText(/Data not found/i)).toBeInTheDocument();
    expect(getByText(/Data not found/i)).toMatchSnapshot();
  });
});
