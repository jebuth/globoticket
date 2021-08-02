import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' hidden/>
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        headerMode='float'>
          <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }} />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};


export default App;
