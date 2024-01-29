import React from 'react'; 
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './Screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import LogInScreen from './Screens/LogInScreen';


export default class App extends React.Component{
  render(){
    return <AppContainer/>;   
  } 
}  
const switchNavigator = createSwitchNavigator({
  AppTabNavigator: { screen: AppTabNavigator },    
  WelcomeScreen:{screen:WelcomeScreen},
});
  
const AppContainer = createAppContainer(switchNavigator);            