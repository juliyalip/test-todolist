import ContainerForPosition from './index';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { render } from '@testing-library/react';

describe('test render component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ContainerForPosition>
          <p>test</p>
        </ContainerForPosition>
      </Provider>,
    );
  });

  it('renders corectly inition document', () => {
    const paragraf = document.querySelector('p');
    expect(paragraf?.textContent).toBe('test');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
