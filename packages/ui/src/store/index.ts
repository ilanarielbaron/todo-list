

import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiReducer';

export const store = configureStore({
	reducer: {
		api: apiReducer
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
