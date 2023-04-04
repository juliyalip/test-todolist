import React, { useState } from "react";
import s from './index.module.scss';

interface IProp{
  value: string,
  onFilter: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

export default function Filter({value, onFilter}: IProp) {
  return (
    <div>
      <label htmlFor="filter">What do you looking for: </label>
      <input type="text" id="filter" value={value} onChange={onFilter} className={s.input}/>
    </div>
  );
}
