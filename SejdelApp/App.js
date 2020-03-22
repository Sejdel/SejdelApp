import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './components/Login/Login.js';
import MainMenu from './components/MainMenu/MainMenu.js';
import Payment from './components/Payment/Payment.js';

const MainNavigator = createStackNavigator({
  Login: {screen : Login,
    navigationOptions: {
      headerShown: false
    },
    path: 'login'
  },
  MainMenu: {screen : MainMenu,
    navigationOptions: {
      headerShown: false
    },
    path: 'mainmenu'
  },
  Payment: {screen : Payment,
    navigationOptions: {
      headerShown: false
    },
    path: 'payment'
  }
})

const App = createAppContainer(MainNavigator);

export default App;