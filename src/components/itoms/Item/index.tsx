import Checkbox from '../Checkbox';
import Cross from '../Cross';
import { ITodo } from '../../../interfaces/todo';
import s from './index.module.scss';

interface IProp {
  item: ITodo;
  onDelete: (id: string) => void;
  onComplited: (id: string) => void;
}

export default function Item({ item, onComplited, onDelete }: IProp) {
  return (
    <li className={s.itemContainer}>
      <Checkbox done={item.done} onComplited={onComplited} id={item.id} />

      <div className={s.itemText} onClick={() => onDelete(item.id)}>
        <p
          style={{
            color: item.done ? 'grey' : 'black',
            textDecoration: item.done ? 'line-through' : '',
          }}
        >
          {item.text}
        </p>

        {!item.done && <Cross />}
      </div>
    </li>
  );
}
