import React from 'react';
import Checkmark from '../Checkmark';
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
        className={style.spanCheck}
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
};

export default Checkbox;
