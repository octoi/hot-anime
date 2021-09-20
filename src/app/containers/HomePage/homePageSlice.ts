import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animeList: [],
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: initialState,
  reducers: {},
});

export const {} = homePageSlice.actions;
export default homePageSlice.reducer;
