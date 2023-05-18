import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import Todos from 'views/Todos';

const initionTodos = [
  { id: '001', text: 'I like React', done: true },
  { id: '002', text: 'Hello world', done: true },
];

const renderComponent = () =>
  renderWithProviders(<Todos />, {
    preloadedState: {
      todos: initionTodos,
    },
  });

it('render filter component correctly', () => {
  renderComponent();
  const input = document.querySelector('input');

  expect(input).toBeInTheDocument();
});

it('get filtered todo', () => {
  const { getByText, queryByText } = renderComponent();

  expect(getByText(/Hello world/)).toBeInTheDocument();

  const input = document.querySelector('input');
  if (input) fireEvent.input(input, { target: { value: 'I like React' } });

  expect(getByText('I like React')).toBeInTheDocument();
  expect(queryByText('Hello worl')).toBeNull();
});
