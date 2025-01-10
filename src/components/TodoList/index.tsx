import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { getVisibleTodos, getTodos } from 'redux/selectors';
import {  complitedTodo } from 'redux/todos-slice';
import Item from 'components/itoms/Item';
import styles from './index.module.scss';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(getTodos);
  const visibleTodos = useAppSelector(getVisibleTodos);


  const handleComplited = (id: string) => {
    dispatch(complitedTodo(id));
  };

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ul className={styles.containerList}>
      {visibleTodos?.map(todo => (
        <Item
          key={todo.id}
          item={todo}
      
          onComplited={() => handleComplited(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
