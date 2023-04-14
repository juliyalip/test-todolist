import React from 'react';
import style from './index.module.scss';

interface IProp {
  children: React.ReactNode;
}

const ContainerForPosition = ({ children }: IProp) => {
  return <div className={style.container}>{children}</div>;
};
export default ContainerForPosition;
