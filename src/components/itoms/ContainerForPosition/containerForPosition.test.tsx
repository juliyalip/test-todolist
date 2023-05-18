import ContainerForPosition from './index';
import { renderWithProviders } from 'utils/test-utils';

describe('test render component', () => {
  beforeEach(() => {
    renderWithProviders(
      <ContainerForPosition>
        <p>test</p>
      </ContainerForPosition>,
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
