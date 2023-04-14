import MenuControlling from '../MenuControling';
import { useAppDispatch } from '../../redux/hooks';
import { removeAllComplited } from '../../redux/todos-slice';
import styles from './index.module.scss';

const  ControllingSection = () =>{
  const dispatch = useAppDispatch();
  const handleRemoveAllComplited = () => {
    dispatch(removeAllComplited());
  };
  return (
    <div className={styles.container}>
      <MenuControlling items={['All', 'Active', 'Completed']} />
      <p className={styles.clear} onClick={handleRemoveAllComplited}>
        Clear complited
      </p>
    </div>
  );
}

export default ControllingSection;
