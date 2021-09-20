import { createSlice } from '@reduxjs/toolkit';
import { IHomePageState } from './types';

const initialState: IHomePageState = {
  animePage: null,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: initialState,
  reducers: {
    setAnimePage(state, action) {
      state.animePage = action.payload;
    },
  },
});

export const { setAnimePage } = homePageSlice.actions;
export default homePageSlice.reducer;
