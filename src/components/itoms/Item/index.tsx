import Checkbox from '../Checkbox';
import Cross from '../Cross';
import { ITodo } from 'types';
import classnames from 'classnames';
import styles from './index.module.scss';

interface ItemInterface {
  item: ITodo;
  onDelete: (id: string) => void;
  onComplited: (id: string) => void;
}

const Item = ({ item, onComplited, onDelete }: ItemInterface) => {
  return (
    <li className={styles.itemContainer} data-testid="item" >
      <Checkbox done={item.done} onComplited={onComplited} id={item.id} />

      <div className={styles.itemText} data-testid="delete-todo" onClick={() => onDelete(item.id)}>
        <p data-testid="style"
          className={classnames({
            [styles.itemTextActive]: item.done,
          })}
        >
          {item.text}
        </p>

        {!item.done &&<Cross />}
      </div>
    </li>
  );
};
export default Item;
