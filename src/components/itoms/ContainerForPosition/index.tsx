import React from 'react';
import styles from './index.module.scss';

interface IProp {
  children: React.ReactNode;
}

const ContainerForPosition = ({ children }: IProp) => {
  return <div className={styles.container}>{children}</div>;
};
export default ContainerForPosition;
