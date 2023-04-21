import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import shortid from 'shortid';
import { addTodo } from '../../redux/todos-slice';
import style from './index.module.scss';

const TodoForm = () => {
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
    <form onSubmit={handleSubmit} className={style.container}>
      {text && <span className={style.labelForActiveForm}></span>}

      <input
        type="text"
        value={text}
        onChange={changeText}
        className={style.inputElement}
      />
      {text && <button type="submit" className={style.btnOnForm}></button>}
    </form>
  );
};

export default TodoForm;
