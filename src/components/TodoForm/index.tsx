import React, { useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import shortid from 'shortid';
import { addTodo } from 'redux/todos-slice';
import styles from './index.module.scss';

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
    <form onSubmit={handleSubmit} className={styles.container}>
      {text && <span className={styles.labelForActiveForm}></span>}

      <input data-testid="input"
        type="text"
        value={text}
        onChange={changeText}
        className={styles.inputElement}
      />
      {text && <button type="submit" className={styles.btnOnForm} data-testid="button"></button>}
    </form>
  );
};

export default TodoForm;
