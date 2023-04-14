import React from 'react';
import Checkmark from '../Checkmark';
import styles from './index.module.scss';

interface IProps {
  done: boolean;
  onComplited: (id: string) => void;
  id: string;
}

const  Checkbox = ({ done, onComplited, id }: IProps) =>{
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => onComplited(id)}
        className={styles.checkbox}
      />
      <span
        className={styles.spanCheck}
        style={{
          background: done
            ? 'linear-gradient(to right, rgba(248, 13, 221, 1), rgba(40, 73, 237, 1))'
            : '',
        }}
      >
        {done && <Checkmark />}
      </span>
    </label>
  );
}

export default Checkbox
