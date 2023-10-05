import { DriversActions } from './drivers';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { store } from './store';
import { api } from '../api';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, { api: typeof api }, Types>;
export type Types = DriversActions;
export type AppThunkAction = ThunkAction<void, RootState, { api: typeof api }, Types>;
