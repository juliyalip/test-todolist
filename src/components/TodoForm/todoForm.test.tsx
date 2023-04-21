import { render, fireEvent } from '@testing-library/react';
import TodoForm from './index';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('test todoForm', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>,
    );
  });

  it('test form element render', () => {
    const form = document.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  it('render input element', () => {
    const input = document.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toBeValid();
  });

  it('render button element', () => {
    const buttonElement = document.querySelector('button');
    if (buttonElement) fireEvent.click(buttonElement);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
