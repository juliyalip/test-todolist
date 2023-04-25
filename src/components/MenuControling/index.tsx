import { useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import classnames from 'classnames';
import style from './index.module.scss';

interface IProp {
  items: string[];
}

const MenuControlling = ({ items }: IProp) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [result, setResult] = useState<number>(0);

  const todos = useAppSelector(state => state.todos);

  const getAllComplited = todos.reduce(
    (total, todo) => (todo.done ? (total += 1) : total),
    0,
  );

  const getAllActive = todos.reduce(
    (total, todo) => (!todo.done ? (total += 1) : total),
    0,
  );

  useEffect(() => {
    if (activeIndex === 0) {
      setResult(todos.length);
    }
    if (activeIndex === 1) {
      setResult(getAllActive);
    }
    if (activeIndex === 2) {
      setResult(getAllComplited);
    }
  }, [activeIndex, todos, getAllActive, getAllComplited]);

  const onClickMenu = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={style.container}>
      <span>{result} items</span>
      <ul className={style.controlList}>
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => onClickMenu(index)}
            className={classnames(style.controlItem, {
              [style.controlItemActive]: index === activeIndex,
            })}
          >
            {item}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuControlling;
