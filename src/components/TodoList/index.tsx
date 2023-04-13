import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { removeTodo , complitedTodo} from '../../redux/todos-slice';
import Item from '../itoms/Item';
import s from './index.module.scss';




export default function TodoList() {
 
  const dispatch = useAppDispatch()
  const todos = useAppSelector(state => state.todos);

console.log(todos)

  const handleRemove = (id: string) =>{
    dispatch(removeTodo(id))
  }


  const handleComplited = (id: string)=>{
    dispatch(complitedTodo(id))
  }


  return (
   
    <ul className={s.containerList}>
      {todos?.map(todo => (
        <Item
          key={todo.id}
          item={todo}
          onDelete={()=> handleRemove(todo.id)}
          onComplited={() =>handleComplited(todo.id)}
        />
      ))}
     </ul>
   
  );
}

