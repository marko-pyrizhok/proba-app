import React from 'react';
import styles from '../styles'
import {
  Image} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import SceneLogin from '../scenes/SceneLogin'
import SceneLogOut from '../scenes/SceneLogout'
import SceneRegister from '../scenes/SceneRegister'
import ProbaScene from '../scenes/ProbaScene'
import SceneGameUser from '../scenes/SceneGameUser'
import SceneGameRanking from '../scenes/SceneGameRanking'
import SideMenu from '../components/DrawerMenu/SideMenu'
import DashboardScene from '../scenes/DashboardScene';

const AuthStack = createStackNavigator(
  {
    Login: SceneLogin,
    Logout: SceneLogOut,
    Register: SceneRegister,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  }
)

const DashboardDrawer = createDrawerNavigator({
  Dashboard: {
    screen: DashboardScene,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: (
        <Image
          source={require('../../assets/favicon.png')}
          style={styles.icon}
        />
      ),
    }
  },
  Proba: {
    screen: ProbaScene,
    navigationOptions: {
      drawerLabel: 'Proba',
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
}, {
  drawerPosition: 'left',
  headerMode: 'none',
  initialRouteName: 'Dashboard',
  contentComponent: SideMenu
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
