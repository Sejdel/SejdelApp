import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation-stack';

import Login from './components/Login/Login.js';
import MainMenu from './components/MainMenu/MainMenu.js';

const App = createStackNavigator({
  Login: {screen : Login},
  MainMenu: {screen : MainMenu}
})

export default createAppContainer(App);