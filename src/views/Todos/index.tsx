import { useAppSelector } from 'redux/hooks';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import Hero from 'components/Hero';
import ContainerForPosition from 'components/itoms/ContainerForPosition';
import ControllingSection from 'components/ControllingSection';
import Filter from 'components/Filter';
import style from './index.module.scss';

export default function Todos() {
  const todos = useAppSelector(state => state.todos);
  const isNotFound = Boolean(todos.length === 0);

  return (
    <>
      <Hero />

      <TodoForm />
      <ContainerForPosition>
        {isNotFound && <p className={style.dataNotFound}>No data available</p>}
        {todos.length > 0 && <Filter />}
        {todos && <TodoList />}
        {todos.length > 0 && <ControllingSection />}
      </ContainerForPosition>
    </>
  );
}
