import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: () => 'Under construction',
  },
});

export const { getStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
