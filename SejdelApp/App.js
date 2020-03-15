import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './components/Login/Login.js';
import MainMenu from './components/MainMenu/MainMenu.js';

const MainNavigator = createStackNavigator({
  Login: {screen : Login,
    navigationOptions: {
      headerShown: false
    },},
  MainMenu: {screen : MainMenu,
    navigationOptions: {
      headerShown: false
    },}
})

const App = createAppContainer(MainNavigator);

export default App;