import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { removeTodo, complitedTodo } from '../../redux/todos-slice';
import Item from '../itoms/Item';
import styles from './index.module.scss';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos);

  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleComplited = (id: string) => {
    dispatch(complitedTodo(id));
  };

  return (
    <ul className={styles.containerList}>
      {todos?.map(todo => (
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
