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
        filter: 'React',
      }),
  );

  it('test get todos selector', () => {
    const result = getTodos(initionState);
    expect(result).toEqual([
      { id: '001', text: 'React', done: false },
      { id: '002', text: 'Redux', done: true },
    ]);
  });
  
  it('test filter' , () =>{
    const result = getFilter(initionState);
    expect(result).toBe('react')
  })

it("filtered todos", () =>{
  const result = getVisibleTodos(initionState)
  expect(result).toEqual([{ id: '001', text: 'React', done: false },])
})

  afterEach(() => {
    jest.clearAllMocks();
  });
});


