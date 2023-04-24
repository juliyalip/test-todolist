import { useAppSelector } from 'redux/hooks';
import { getTodos } from 'redux/selectors';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import Hero from 'components/Hero';
import ContainerForPosition from 'components/itoms/ContainerForPosition';
import ControllingSection from 'components/ControllingSection';
import Filter from 'components/Filter';
import style from './index.module.scss';

export default function Todos() {
  const todos = useAppSelector(getTodos);
  const isData = Boolean(todos.length === 0);
  return (
    <>
      <Hero />

      <TodoForm />
      <ContainerForPosition>
        {isData && <p className={style.textNotFound}>Data not found</p>}
        {todos.length > 0 && <Filter />}
        {todos && <TodoList />}
        {todos.length > 0 && <ControllingSection />}
      </ContainerForPosition>
    </>
  );
}
