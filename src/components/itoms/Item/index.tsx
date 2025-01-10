import Checkbox from '../Checkbox';
import { ITodo } from 'types';
import classnames from 'classnames';
import styles from './index.module.scss';

interface ItemInterface {
  item: ITodo;
 
  onComplited: (id: string) => void;
}

const Item = ({ item, onComplited }: ItemInterface) => {
  return (
    <li className={styles.itemContainer} data-testid="item" >
      <Checkbox done={item.done} onComplited={onComplited} id={item.id} />
    
        <div data-testid="style"
          className={classnames({
            [styles.itemComplited]: item.done,
          })}
        >
          {item.text}
        </div>
       
    </li>
  );
};
export default Item;
