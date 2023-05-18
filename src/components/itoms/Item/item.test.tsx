import { render, screen } from '@testing-library/react';
import { ITodo } from 'types';
import Item from './index';

describe('test Item component', () => {
  const handleComplited = jest.fn();
  const handleDelete = jest.fn();

  it('prerender correctly', () => {
    const item: ITodo = { id: '001', text: 'I like Redux', done: false };
    render(
      <Item
        item={item}
        onComplited={handleComplited}
        onDelete={handleDelete}
      />,
    );
    const li = screen.getByTestId('item');
    const text = screen.getByTestId('style');

    expect(li).toBeInTheDocument();
    expect(text).toHaveTextContent('I like Redux');
    expect(text).toMatchSnapshot();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
