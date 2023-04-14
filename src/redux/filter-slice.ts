import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onFilter: (_, { payload }) => payload,
  },
});

export const { onFilter } = filterSlice.actions;
export default filterSlice.reducer;
