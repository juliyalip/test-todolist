import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/LodoList";
import { ITodo } from "../../interfaces/todo";

export default function TodosPage() {
  const [todos, setTodos] = useState<ITodo[]>([]);

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

  return (
    <div>
      <TodoForm addTodo={handleAdd} />
      {todos && (
        <TodoList
          items={todos}
          onDelete={handleDelete}
          onComplited={handleComplited}
        />
      )}
    </div>
  );
}
