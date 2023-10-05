import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';
import { api } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import createDebugger from 'redux-flipper';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['drivers'],
};

const middlewares = [thunk.withExtraArgument({ api })];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
