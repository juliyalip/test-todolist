import { useState } from 'react';
import s from './index.module.scss';

interface IProp {
  items: string[];
}

export default function MenuControlling({ items }: IProp) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickMenu = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul className={s.controlList}>
      {items.map((item, index) => (
        <li
          key={item}
          onClick={() => onClickMenu(index)}
          className={s.controlItem}
          style={{ color: index === activeIndex ? 'blue' : 'black' }}
        >
          {item}{' '}
        </li>
      ))}
    </ul>
  );
}
