import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { getVisibleTodos, getTodos } from 'redux/selectors';
import { removeTodo, complitedTodo } from 'redux/todos-slice';
import Item from 'components/itoms/Item';
import style from './index.module.scss';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(getTodos);
  const visibleTodos = useAppSelector(getVisibleTodos);

  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleComplited = (id: string) => {
    dispatch(complitedTodo(id));
  };

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ul className={style.containerList}>
      {visibleTodos?.map(todo => (
        <Item
          key={todo.id}
          item={todo}
          onDelete={() => handleRemove(todo.id)}
          onComplited={() => handleComplited(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
