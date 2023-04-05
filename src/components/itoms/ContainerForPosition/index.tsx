import React from "react";
import s from './index.module.scss'

interface IProp {
  children: React.ReactNode;

}

export default function ContainerForPosition({ children }: IProp) {
 return(
  <div className={s.container} >{children}</div>
 )
}
