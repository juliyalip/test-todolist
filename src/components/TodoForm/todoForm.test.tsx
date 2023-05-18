import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import TodoForm from './index';

const renderComponent = () => renderWithProviders(<TodoForm />);

describe('test todoForm', () => {
  it('test form element render', () => {
    const { getByTestId } = renderComponent();
    const input = getByTestId('input');

    expect(input.textContent).toBe('');
    expect(input).toBeValid();
  });

  it('update input element', () => {
    const input = document.querySelector('input');
    if (input) {
      fireEvent.input(input, { target: { value: 'hello' } });

      expect(input?.value).toBe('hello');
    }
  });

  it('conditional for render  button element', () => {
    const { getByTestId } = renderComponent();
    const input = getByTestId('input');
    if (input) {
      fireEvent.input(input, { target: { value: 'hello' } });
    }
    const buttonElement = getByTestId('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
  });
});
