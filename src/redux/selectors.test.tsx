import { getTodos, getFilter, getVisibleTodos } from './selectors';
import { RootState } from './store';

describe('test selectors', () => {
  let initionState: RootState;
  beforeEach(
    () =>
      (initionState = {
        todos: [
          { id: '001', text: 'React', done: false },
          { id: '002', text: 'Redux', done: true },
        ],
        filter: '',
      }),
  );

  it('test get todos selector', () => {
    const result = getTodos(initionState);
    expect(result).toEqual([
      { id: '001', text: 'React', done: false },
      { id: '002', text: 'Redux', done: true },
    ]);
  });

  it('get filter selector', () => {
    const result = getFilter(initionState);
    expect(result).toEqual(initionState.filter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
