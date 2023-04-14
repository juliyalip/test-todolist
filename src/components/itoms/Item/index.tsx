import Checkbox from '../Checkbox';
import Cross from '../Cross';
import { ITodo } from '../../../types';
import styles from './index.module.scss';

interface ItemInterface {
  item: ITodo;
  onDelete: (id: string) => void;
  onComplited: (id: string) => void;
}

const Item = ({ item, onComplited, onDelete }: ItemInterface) => {
  return (
    <li className={styles.itemContainer}>
      <Checkbox done={item.done} onComplited={onComplited} id={item.id} />

      <div className={styles.itemText} onClick={() => onDelete(item.id)}>
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
};
export default Item;
