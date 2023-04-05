import React from 'react';
import Checkmark from '../Checkmark';
import s from './index.module.scss';

interface IProps {
  done: boolean;
  onComplited: (id: string) => void;
  id: string;
}

export default function Checkbox({ done, onComplited, id }: IProps) {
  return (
    <label className={s.label}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => onComplited(id)}
        className={s.checkbox}
      />
      <span
        className={s.spanCheck}
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
