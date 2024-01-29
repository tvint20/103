import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LogInScreen from '../Screens/LogInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import { Icon } from 'react-native-elements';


export const AppTabNavigator = createBottomTabNavigator({
  LogIn: {
    screen: SignUpScreen ,
    navigationOptions: {
      tabBarIcon: <Icon name="log-in" type="ionicon" color="green" />,
      tabBarLabel: 'Log-in',
    },
  },
  
  SignUp: {
    screen: LogInScreen,
    navigationOptions: {
      tabBarIcon: <Icon name="person-add" type="ionicon" color="green" />,
      tabBarLabel: 'Sign-Up',
    }, 
  },




  
});
