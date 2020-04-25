import React from 'react';
import {
  AppRegistry
} from 'react-native';
import Secured from './Secured';
import Login from './Login';

export default class Main extends React.Component {
  state = {
    isLoggedIn: false,
    bearerToken: ''
  }

  render() {

    if (this.state.isLoggedIn) 
      return <Secured token={this.state.bearerToken}
          onLogoutPress={() => this.setState({isLoggedIn: false, bearerToken: ''})}
        />;
    else 
      return <Login 
          onLoginPress={(token) => {
            this.setState({isLoggedIn: true, bearerToken: token})
          }}
        />;
  }

}

AppRegistry.registerComponent(Main , () => Main );