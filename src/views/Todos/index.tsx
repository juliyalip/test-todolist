import { useAppSelector } from 'redux/hooks';
import { getTodos } from 'redux/selectors';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import Hero from 'components/Hero';
import Container from 'components/Container/Container';
import ControllingSection from 'components/ControllingSection';
import Filter from 'components/Filter';
import styles from './index.module.scss';

export default function Todos() {
  const todos = useAppSelector(getTodos);
  const isNotData = Boolean(todos.length === 0);
  return (
    <>
      <Hero />
<Container>
      <TodoForm />
     
        {isNotData && <p className={styles.textNotFound} >Data not found</p>}
        {todos.length > 0 && <Filter />}
        {todos && <TodoList />}
        {todos.length > 0 && <ControllingSection />}
    
      </Container>
    </>
  );
}
