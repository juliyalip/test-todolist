import FilterSlice, { onFilter } from './filter-slice';

describe('test for filter', () => {
  const initionState = '';

  it('test for filter', () => {
    expect(FilterSlice(initionState, onFilter('some string'))).toBe(
      'some string',
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
