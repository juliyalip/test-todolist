import { fireEvent, screen } from '@testing-library/react';
import Todos from 'views/Todos';
import { renderWithProviders } from 'utils/test-utils';

describe('test Controling section', () => {
  beforeEach(() => {
    const initionTodos = [
      { id: '001', text: 'I like React', done: true },
      { id: '002', text: 'I like Redux', done: true },
    ];
    const { getByText } = renderWithProviders(<Todos />, {
      preloadedState: {
        todos: initionTodos,
      },
    });
  });

  it('Prerender corectly', () => {
    expect(screen.getByText(/I like React/)).toBeInTheDocument();
    expect(screen.getByText(/I like Redux/)).toBeInTheDocument();
    expect(screen.getByText(/Clear complited/)).toBeInTheDocument();
    expect(screen.getByText(/Active/i)).toBeInTheDocument();
    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/Completed/i)).toBeInTheDocument();
  });

  it('test get results after click on buttons', () => {
    const btnComplited = screen.getByText(/Completed/i);
    const btnActive = screen.getByText(/Active/i);
    const btnAll = screen.getByText(/All/i);
    const result = screen.getByTestId('result');
    fireEvent.click(btnComplited);
    expect(result.textContent).toBe('2 items');
    fireEvent.click(btnActive);
    expect(result.textContent).toBe('0 items');
    fireEvent.click(btnAll);
    expect(result.textContent).toBe('2 items');
  });

  it('test get result after delete all complited todos', () => {
    const btnAllComplited = screen.getByText(/Clear complited/i);
    expect(screen.queryByText(/Data not found/i)).toBeNull();
    fireEvent.click(btnAllComplited);
    expect(screen.getByText(/Data not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Data not found/i)).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
