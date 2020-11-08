import React from 'react';
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import configureStore from './src/redux/store'
import { initialiseApplication } from './src/redux/actions/application.actions'
import Navigation from './src/routing'
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import { Text, View } from 'react-native'

const store = configureStore()
store.dispatch(initialiseApplication())

export default function App() {
  const [isLoaded] = useFonts({
    "MyriadPro-Regular": require("./assets/fonts/MyriadPro-Regular.ttf"),
    "MyriadPro-Bold": require("./assets/fonts/MyriadPro-Bold.ttf")
  }); 

    if (!isLoaded) {
      return <AppLoading />;}
      else {
    return (
      <Provider store={store}>
        <StatusBar hidden />
        <Text 
       style={{ fontFamily: "MyriadPro-Regular" }}>
        Hello World
     </Text><Text 
       style={{ fontFamily: "MyriadPro-Bold" }}>
        Hello World
     </Text>
        <Navigation />
      </Provider>
    )
      }
  }

