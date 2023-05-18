import { fireEvent, screen } from '@testing-library/react';
import Todos from './index';
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

describe('render correctly', () => {

  it('test delete todo, show Data not found ', () => {
    const {getByText, queryByText} = renderComponent()
    const firstElement = getByText(/I like Redux/);
    const secondElement = getByText(/I like React/);

    expect(queryByText(/Data not found/i)).toBeNull();

    fireEvent.click(firstElement);
    fireEvent.click(secondElement);

    expect(firstElement).not.toBeInTheDocument();
    expect(secondElement).not.toBeInTheDocument();
    expect(queryByText(/Data not found/i)).toBeInTheDocument();
  });

  it('test delete all complited Todo', () => {
    const {getByText, queryByText} = renderComponent()
   
    expect(getByText(/I like React/i)).toBeInTheDocument();
    expect(getByText(/I like Redux/)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Clear complited'));
    
    expect(queryByText(/I like React/i)).toBeNull();
    expect(queryByText(/I like Redux/)).toBeNull();
  });
});
