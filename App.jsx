import React from 'react';
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import configureStore from './src/redux/store'
import { initialiseApplication } from './src/redux/actions/application.actions'
import Navigation from './src/routing'

const store = configureStore()
store.dispatch(initialiseApplication())

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <StatusBar hidden />
        <Navigation />
      </Provider>
    )
  }
}
