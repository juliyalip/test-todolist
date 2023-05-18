import Checkmark from '../Checkmark';
import classnames from 'classnames';
import styles from './index.module.scss';

interface IProps {
  done: boolean;
  onComplited: (id: string) => void;
  id: string;
}

const Checkbox = ({ done, onComplited, id }: IProps) => {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => onComplited(id)}
        className={styles.checkbox}
      />
      <span
        className={classnames(styles.spanCheck, {
          [styles.spanCheckActive]: done,
        })}
      >
        {done && <Checkmark />}
      </span>
    </label>
  );
};

export default Checkbox;
