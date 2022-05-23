import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({route}) => ({
            headerTitle: 'NYTimes Movies Review',
          })}
        />
        <Stack.Screen name="Details" component={Details}  /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
