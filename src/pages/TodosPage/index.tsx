import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { ITodo } from "../../interfaces/todo";
import Hero from "../../components/Hero";
import ContainerForPosition from "../../components/itoms/ContainerForPosition";
import ControllingSection from "../../components/ControllingSection";


export default function TodosPage() {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: "001",
      text: "I love React",
      done: false,
    },
  ]);
  

  const handleAdd = (todo: ITodo) => {
    setTodos((prevState) => [...prevState, todo]);
  };
  const handleDelete = (id: string) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };
  const handleComplited = (id: string) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };



  return (
    <>
      <Hero />

      <TodoForm addTodo={handleAdd} />
    <ContainerForPosition>
        {todos && (
          <TodoList
            items={todos}
            onDelete={handleDelete}
            onComplited={handleComplited}
          />
        )}
        {todos.length > 0 && <ControllingSection result="all todos"/>}
        </ContainerForPosition>
    </>
  );
}
