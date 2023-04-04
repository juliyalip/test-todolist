import React, { useState } from "react";
import shortid from "shortid";
import {ITodo} from '../../interfaces/todo';
import s from './index.module.scss'

interface IProp {
  addTodo: (todo: ITodo) => void;
}

export default function TodoForm({ addTodo }: IProp) {
  const [text, setText] = useState<string>("");
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!text){
        alert("The field is empty")
        return
    }
    addTodo({text, id: shortid.generate(), done: false});
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className={s.container}>
      
        <label htmlFor="text" className={s.elForm}>Do it</label>
        <input type="text" value={text} onChange={changeText} className={s.elForm}/>
     
      <button type="submit" className={s.elForm}>submit</button>
    </form>
  );
}
