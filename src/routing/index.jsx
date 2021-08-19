import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import DashboardScene from '../scenes/DashboardScene';
import {
  Image
} from 'react-native';
import ProbaScene from '../scenes/ProbaScene'
import React from 'react';
import SceneGameRanking from '../scenes/SceneGameRanking'
import SceneGameUser from '../scenes/SceneGameUser'
import SceneLogOut from '../scenes/SceneLogout'
import SceneLogin from '../scenes/SceneLogin'
import SceneSignUp from '../scenes/SceneSignUp'
import SideMenu from '../components/DrawerMenu/SideMenu'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import styles from '../styles'

const AuthStack = createStackNavigator(
  {
    Login: SceneLogin,
    Logout: SceneLogOut,
    Register: SceneSignUp,
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
