import React from 'react';
import { RootNavigator } from './navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
