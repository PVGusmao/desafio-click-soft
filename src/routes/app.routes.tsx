import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from '../screens/Home/Home';
import { Post } from '../screens/Post/Post';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: '#3b5998',
        },
      }}
      initialRouteName={'home'}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Post" component={Post} />
    </Navigator>
  );
}