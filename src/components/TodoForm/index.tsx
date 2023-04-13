import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import shortid from 'shortid';
import { addTodo } from '../../redux/todos-slice';

import s from './index.module.scss';




export default function TodoForm() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>('');
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };


  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('The field is empty');
      return;
    }
    dispatch(addTodo({ text, id: shortid.generate(), done: false }));
   
    setText('');
  };


  return (
    <>
      <form onSubmit={handleSubmit} className={s.container}>
        {text && <span className={s.labelForActiveForm}></span>}

        <input
          type="text"
          value={text}
          onChange={changeText}
          className={s.elForm}
        />
      </form>
    </>
  );
}
