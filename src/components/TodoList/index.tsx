import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getVisibleTodos } from '../../redux/selectors';
import { removeTodo, complitedTodo } from '../../redux/todos-slice';
import Item from '../itoms/Item';
import style from './index.module.scss';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const visibleTodos = useAppSelector(getVisibleTodos);

  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleComplited = (id: string) => {
    dispatch(complitedTodo(id));
  };

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
