import MenuControlling from '../MenuControling';
import s from './index.module.scss';

interface IProp {
  result: string;
  onDeleteTodos: () => void
}

export default function ControllingSection({ result, onDeleteTodos }: IProp) {
  return (
    <div className={s.container}>
      <span>{result}</span>
      <MenuControlling items={['All', 'Active', 'Completed']} />
      <p className={s.clear} onClick={onDeleteTodos}>Clear complited</p>
    </div>
  );
}
