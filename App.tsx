import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import AppContainer from './src/navigation/AppContainer';
import store from './src/redux';
const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
