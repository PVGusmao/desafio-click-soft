import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from '../screens/Home/Home';
import { Post } from '../screens/Post/Post';
import UserDetails from '../screens/UserDetails/UserDetails';
import { IUser } from '../components/CardPosts/CardPosts.intefaces';

export type RootStackParamList = {
  "Home": undefined,
  "Post": undefined,
  "UserDetails": [string, { user: IUser; }],
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

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
      initialRouteName={'Home'}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Post" component={Post} />
      <Screen options={{headerTitle: 'Detalhes do Usuário'}} name="UserDetails" component={UserDetails} />
    </Navigator>
  );
}