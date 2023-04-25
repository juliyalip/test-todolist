import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import TodoForm from './index';


describe('test todoForm', () => {
  beforeEach(() => {
  renderWithProviders(<TodoForm />)
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


//   <Provider store={store}>
//     <TodoForm />
//     </Provider>