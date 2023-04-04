import React from "react";
import s from './index.module.scss'

interface IProp {
    width?: string
  children: React.ReactNode;
}

export default function Container({ children }: IProp) {
  return <div  className={s.container}>{children}</div>;
}
