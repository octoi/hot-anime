import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homePageSlice from './containers/HomePage/homePageSlice';

export const store = configureStore({
  reducer: {
    homePage: homePageSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
