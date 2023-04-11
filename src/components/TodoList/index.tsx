import { ITodo } from '../../interfaces/todo';
import Item from '../itoms/Item';
import s from './index.module.scss';

interface IProp {
  items: ITodo[];
  onDelete: (id: string) => void;
  onComplited: (id: string) => void;
}

export default function TodoList({ items, onDelete, onComplited }: IProp) {
  return (<>
   
    <ul className={s.containerList}>
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          onDelete={onDelete}
          onComplited={onComplited}
        />
      ))}
    </ul>
    </>
  );
}
