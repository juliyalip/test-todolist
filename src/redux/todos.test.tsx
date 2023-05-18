import TodosSlice, {
  addTodo,
  removeTodo,
  complitedTodo,
  removeAllComplited,
} from './todos-slice';
import { ITodo } from '../types';

describe('tests for ListSlice', () => {
  let initionState: ITodo[];

  beforeEach(
    () =>
      (initionState = [
        { id: '001', text: 'React', done: false },
        { id: '002', text: 'Redux', done: true },
      ]),
  );

  it('test get inition state', () => {
    expect(TodosSlice(initionState, { type: undefined })).toEqual([
      { id: '001', text: 'React', done: false },
      { id: '002', text: 'Redux', done: true },
    ]);
  });

  it('test add todo to list', () => {
    expect(
      TodosSlice(
        initionState,
        addTodo({ id: '003', text: 'Kiwi', done: false }),
      ),
    ).toEqual([
      { id: '001', text: 'React', done: false },
      { id: '002', text: 'Redux', done: true },
      { id: '003', text: 'Kiwi', done: false },
    ]);
  });

  it('test delete todo', () => {
    expect(TodosSlice(initionState, removeTodo('001'))).toEqual([
      { id: '002', text: 'Redux', done: true },
    ]);
  });

  it('test comlited todo', () => {
    expect(TodosSlice(initionState, complitedTodo('001'))).toEqual([
      {
        id: '001',
        text: 'React',
        done: true,
      },
      { id: '002', text: 'Redux', done: true },
    ]);
  });

  it('test deleted allComplited todo', () => {
    expect(TodosSlice(initionState, removeAllComplited())).toEqual([
      { id: '001', text: 'React', done: false },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
