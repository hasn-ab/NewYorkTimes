import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import AppContainer from './src/navigation/AppContainer';
import {store, persistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import Loader from './src/components/Loader';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
