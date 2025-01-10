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
    <form onSubmit={handleSubmit} >
      <div className={`${styles.formContainer}  ${text ? styles.activeFormContainer : ''}`}>
     <span className={styles.labelForActiveForm} style={{opacity:  text? 1: 0}}></span>
      <input data-testid="input" placeholder='add your task'
        type="text"
        value={text}
        onChange={changeText}
        className={styles.inputElement}
      />
      </div>
    </form>
  );
};

export default TodoForm;
