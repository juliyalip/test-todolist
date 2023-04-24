import React from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { onFilter } from 'redux/filter-slice';
import style from './index.module.scss';

const Filter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(state => state.filter);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onFilter(e.target.value));
  };
  return (
    <div className={style.containerFilter}>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="search"
        className={style.inputEl}
      />
    </div>
  );
};

export default Filter;
