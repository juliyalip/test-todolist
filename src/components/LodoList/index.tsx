import React from "react";
import { ITodo } from "../../interfaces/todo";
import s from './index.module.scss'

interface IProp {
  items: ITodo[];
  onDelete: (id: string) => void;
  onComplited: (id: string) => void;
}

export default function LodoList({ items, onDelete, onComplited }: IProp) {
  return (
    <ul className={s.list}>
      {items.map(({ id, text, done }) => (
        <li key={id} className={s.item}>
          <p >{text}</p>
          <input id="done"
            type="checkbox"
            checked={done}
            onChange={() => onComplited(id)}
          />
          <label htmlFor="done">done</label>
          <button type="button" onClick={() => onDelete(id)} className={s.btn}>
            delete
          </button>
        </li>
      ))}
    </ul> 
  );
}
