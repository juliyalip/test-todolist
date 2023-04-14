import React, { useState , useEffect} from 'react';
import { useAppDispatch } from '../../redux/hooks';
import shortid from 'shortid';
import { addTodo } from '../../redux/todos-slice';
import Alert from '../../components/itoms/Alert';

import style from './index.module.scss';

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>('');
  const [visibleAlert, setVisibleAlert] = useState(false);
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

useEffect(()=>{
setTimeout(()=>{
  setVisibleAlert(false)
}, 2000)
}, [visibleAlert])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      setVisibleAlert(true);
      return;
    }
    dispatch(addTodo({ text, id: shortid.generate(), done: false }));

    setText('');
  };

  return (
    <>
      {visibleAlert && <Alert />}
      <form onSubmit={handleSubmit} className={style.container}>
        {text && <span className={style.labelForActiveForm}></span>}

        <input
          type="text"
          value={text}
          onChange={changeText}
          className={style.inputElement}
        />
      </form>
    </>
  );
};

export default TodoForm;
