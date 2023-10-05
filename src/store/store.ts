import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './rootReducer';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { api } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { DriversActions } from './drivers';
import createDebugger from 'redux-flipper';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middlewares = [thunk.withExtraArgument({ api })];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, { api: typeof api }, AppActions>;
export type AppActions = DriversActions;
export type AppThunkAction = ThunkAction<void, RootState, { api: typeof api }, AppActions>;
