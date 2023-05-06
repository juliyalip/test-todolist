import { fireEvent, screen } from '@testing-library/react';
import Todos from './index';
import { renderWithProviders } from 'utils/test-utils';

describe('render correctly', () => {
  beforeEach(() => {
    const initionTodos = [
      { id: '001', text: 'I like Redux', done: false },
      { id: '002', text: 'I like React', done: true },
    ];

    const { getByText } = renderWithProviders(<Todos />, {
      preloadedState: {
        todos: initionTodos,
      },
    });
  });

  it('test delete todo, show Data not found ', () => {
    const firstElement = screen.getByText(/I like Redux/);
    const secondElement = screen.getByText(/I like React/);
    expect(screen.queryByText(/Data not found/i)).toBeNull();
    fireEvent.click(firstElement);
    fireEvent.click(secondElement);
    expect(firstElement).not.toBeInTheDocument();
    expect(secondElement).not.toBeInTheDocument();
    expect(screen.queryByText(/Data not found/i)).toBeInTheDocument();
  });

  it('test delete all complited Todo', () => {
    const textReact = screen.getByText(/I like React/i); //done: true
    const textRedux = screen.getByText(/I like Redux/);
    expect(textReact).toBeInTheDocument();
    expect(textRedux).toBeInTheDocument();

    fireEvent.click(screen.getByText('Clear complited'));
    expect(textReact).not.toBeInTheDocument();
    expect(textRedux).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
