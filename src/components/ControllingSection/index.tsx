import MenuControlling from 'components/MenuControling';
import { useAppDispatch } from 'redux/hooks';
import { removeAllComplited } from 'redux/todos-slice';
import style from './index.module.scss';

const ControllingSection = () => {
  const dispatch = useAppDispatch();
  const handleRemoveAllComplited = () => {
    dispatch(removeAllComplited());
  };
  return (
    <div className={style.container}>
      <MenuControlling items={['All', 'Active', 'Completed']} />
      <p className={style.clear} onClick={handleRemoveAllComplited}>
        Clear complited
      </p>
    </div>
  );
};

export default ControllingSection;
