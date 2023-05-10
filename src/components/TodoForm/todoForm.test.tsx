import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import TodoForm from './index';

describe('test todoForm', () => {
  beforeEach(() => {
    renderWithProviders(<TodoForm />);
  });

  it('test form element render', () => {
    const form = document.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  it('render and update input element', () => {
    const input = document.querySelector('input');
    expect(input?.value).toBe('');
    expect(input).toBeValid();
    if (input) {
      fireEvent.input(input, { target: { value: 'hello' } });
      expect(input?.value).toBe('hello');
    }
  });

  it('conditional render for button element', () => {
    const input = document.querySelector('input');
    if (input) {
      fireEvent.input(input, { target: { value: 'hello' } });
      const buttonElement = document.querySelector('button');
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toMatchSnapshot();
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
