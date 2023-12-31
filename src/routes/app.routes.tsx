import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from '../screens/Home/Home';
import UserDetails from '../screens/UserDetails/UserDetails';
import { IUser } from '../components/CardPosts/CardPosts.intefaces';
import EditPost from '../screens/EditPost/EditPost';

export type RootStackParamList = {
  "Home": undefined,
  "EditPost": undefined,
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
          backgroundColor: '#2f056b',
        },
      }}
      initialRouteName={'Home'}
    >
      <Screen name="Home" component={Home} />
      <Screen options={{headerTitle: 'Detalhes do Usuário'}} name="UserDetails" component={UserDetails} />
      <Screen options={{headerTitle: 'Editar Post'}} name='EditPost' component={EditPost} />
    </Navigator>
  );
}