import React, { useState } from 'react';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import { ITodo } from '../../interfaces/todo';
import Hero from '../../components/Hero';
import ContainerForPosition from '../../components/itoms/ContainerForPosition';
import ControllingSection from '../../components/ControllingSection';

export default function TodosPage() {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: '001',
      text: 'I love React',
      done: false,
    },
  ]);

 


  const deleteDoneTodos = () => {
    setTodos(prevState =>
      prevState.filter(todo => {
        return todo.done === false;
      }),
    );
  };

  return (
    <>
      <Hero />

      <TodoForm  />
      <ContainerForPosition>
        {todos && (
          <TodoList
          
         
          
          />
        )}
        {todos.length > 0 && (
          <ControllingSection
            result="all todos"
            onDeleteTodos={deleteDoneTodos}
          />
        )}
      </ContainerForPosition>
    </>
  );
}
