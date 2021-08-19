import AppLoading from "expo-app-loading";
import Navigation from "./src/routing";
import { Provider } from "react-redux";
import React from "react";
import { StatusBar } from "react-native";
import configureStore from "./src/redux/store";
import { initialiseApplication } from "./src/redux/actions/application.actions";
import { useFonts } from 'expo-font';

const store = configureStore();
store.dispatch(initialiseApplication());

export default function App() {
  const [isLoaded] = useFonts({
    "MyriadPro-Regular": require("./assets/fonts/MyriadPro-Regular.ttf"),
    "MyriadPro-Bold": require("./assets/fonts/MyriadPro-Bold.ttf"),
  });

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <StatusBar hidden />
        <Navigation />
      </Provider>
    );
  }
}
