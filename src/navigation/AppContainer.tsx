import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/Home';
import ArticleScreen from '@screens/Article';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppContainer;
