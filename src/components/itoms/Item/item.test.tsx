import { render } from '@testing-library/react';
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
    const li = document.querySelector('li');
    const p = document.querySelector('p');
    expect(li).toBeInTheDocument();
    expect(p).toHaveTextContent('I like Redux');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
