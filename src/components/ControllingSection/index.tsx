import MenuControlling from '../MenuControling';
import s from './index.module.scss';

interface IProp {
  result: string;
}

export default function ControllingSection({ result }: IProp) {
  return (
    <div className={s.container}>
      <span>{result}</span>
      <MenuControlling items={['All', 'Active', 'Completed']} />
      <p className={s.clear}>Clear complited</p>
    </div>
  );
}
