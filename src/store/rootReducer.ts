import { combineReducers } from 'redux';
import { driversReducer } from './drivers';

export const rootReducer = combineReducers({ drivers: driversReducer });
