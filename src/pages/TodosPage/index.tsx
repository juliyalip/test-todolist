import { useAppSelector } from '../../redux/hooks';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import Hero from '../../components/Hero';
import ContainerForPosition from '../../components/itoms/ContainerForPosition';
import ControllingSection from '../../components/ControllingSection';

export default function TodosPage() {
  const todos = useAppSelector(state => state.todos);

  return (
    <>
      <Hero />

      <TodoForm />
      <ContainerForPosition>
        {todos && <TodoList />}
        {todos.length > 0 && <ControllingSection />}
      </ContainerForPosition>
    </>
  );
}


