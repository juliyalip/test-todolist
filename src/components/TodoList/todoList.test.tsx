import { renderWithProviders } from 'utils/test-utils';
import TodoList from './index';

describe('test todoList', () => {
  it('prerender correctly', () => {
    const initialTodos = [{ id: '005', text: 'I like Redux', done: false }];
    const { getByText } = renderWithProviders(<TodoList />, {
      preloadedState: {
        todos: initialTodos,
      },
    });

    expect(getByText(/I like Redux/i)).toBeInTheDocument();
  });
});
