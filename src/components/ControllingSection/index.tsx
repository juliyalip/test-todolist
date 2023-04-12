import MenuControlling from '../MenuControling';
import { useAppDispatch } from '../../redux/hooks';
import { removeAllComplited } from '../../redux/todos-slice';
import s from './index.module.scss';

export default function ControllingSection() {
  const dispatch = useAppDispatch();
  const handleRemoveAllComplited = () => {
    dispatch(removeAllComplited());
  };
  return (
    <div className={s.container}>
      <MenuControlling items={['All', 'Active', 'Completed']} />
      <p className={s.clear} onClick={handleRemoveAllComplited}>
        Clear complited
      </p>
    </div>
  );
}
