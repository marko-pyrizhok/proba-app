import React from 'react';
import styles from '../styles'
import {
    Image,
  } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import SceneHome from '../scenes/SceneHome'
import SceneLogin from '../scenes/SceneLogin'
import SceneLogOut from '../scenes/SceneLogout'
import SceneRegister from '../scenes/SceneRegister'
import SceneGameHome from '../scenes/SceneGameHome'
import SceneGameUser from '../scenes/SceneGameUser'
import SceneGameRanking from '../scenes/SceneGameRanking'

const AuthStack = createStackNavigator(
    {
        Home: SceneHome,
        Login: SceneLogin,
        Logout: SceneLogOut,
        Register: SceneRegister,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Login',
    }
)

const DashboardDrawer = createDrawerNavigator(
    {
        Game: {
        screen: SceneGameHome,
        navigationOptions: {
          drawerLabel: 'Game',
          drawerIcon: (
              <Image
                  source={require('../../assets/favicon.png')}
                  style={styles.icon}
              />
          ),
        }
      },
      User: {
        screen: SceneGameUser,
        navigationOptions: {
          drawerLabel: 'User',
          drawerIcon: (
              <Image
                  source={require('../../assets/favicon.png')}
                  style={styles.icon}
              />
          ),
        }
      },
      Ranking: {
        screen: SceneGameRanking,
        navigationOptions: {
          drawerLabel: 'Ranking',
          drawerIcon: (
              <Image
                  source={require('../../assets/favicon.png')}
                  style={styles.icon}
              />
          ),
        }
      },
    },
    {
      drawerPosition: 'left',
      headerMode: 'none',
      initialRouteName: 'Game',
    }
);

const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {
            Auth: AuthStack,
            Dashboard: DashboardDrawer,
        },
        {
            initialRouteName: 'Auth',
        }
    )
)

export default createAppContainer(AppNavigator)
