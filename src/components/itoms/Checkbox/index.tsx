import Checkmark from '../Checkmark';
import cn from 'classnames';
import style from './index.module.scss';

interface IProps {
  done: boolean;
  onComplited: (id: string) => void;
  id: string;
}

const Checkbox = ({ done, onComplited, id }: IProps) => {
  return (
    <label className={style.label}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => onComplited(id)}
        className={style.checkbox}
      />
      <span
        className={cn(style.spanCheck, {
          [style.spanCheckActive]: done,
        })}
      >
        {done && <Checkmark />}
      </span>
    </label>
  );
};

export default Checkbox;
