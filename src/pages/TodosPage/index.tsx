import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/LodoList";
import Filter from '../../components/Filter'
import { ITodo } from "../../interfaces/todo";
import s from './index.module.scss'

export default function TodosPage() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filterValue, setFilterValue] = useState('')

const handleAdd =(todo: ITodo)=>{
    setTodos(prevState => [...prevState, todo])
}
  const handleDelete = (id: string) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };
  const handleComplited = (id: string) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          };
        }
        return item;
      })
    );
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setFilterValue(e.target.value)
  }


  const filteredTodos: ITodo[] = todos.filter(todo => todo.text.toLowerCase().includes(filterValue.toLowerCase()))

  return (
    < >
      <TodoForm addTodo={handleAdd} />
      <div className={s.container}>
       <Filter value={filterValue} onFilter={handleFilter} />
      {todos && (
        <TodoList
          items={filteredTodos}
          onDelete={handleDelete}
          onComplited={handleComplited}
        />
      )}
      </div>
    </>
  );
}
