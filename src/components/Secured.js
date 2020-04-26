import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor: 'crimson',
    backgroundColor: 'crimson',
    flex: 1,
    height: 100,
  },
});

export default class Secured extends Component {

  state = {
    probaResponceReceived: false,
    probaPoints: ''
  }

  componentDidMount() {

    fetch("https://proba-api.herokuapp.com/my-last-proba-points", {
      credentials: 'include',
      mode: 'cors',
      method: "GET",
      headers: {
        'Authorization': this.props.token
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response != null) {
          this.setState({ probaResponceReceived: true, probaPoints: response });
        }
      })
      .catch(err => {
      });
  }

  render() {
    return this.renderItem();
  }

  renderItem() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <View style={{
          flex: 1,
          width: 500,
          height: 500,
          justifyContent: 'space-between',
        }}>
          {
            (
              this.state.probaResponceReceived)
              ? this.state.probaPoints.map((item) => {
                return 
                  <View style={styles.container} >
                    <Text>{item.code} {item.name} {item.confirmUserId} {item.confirmDate}</Text>
                  </View>
              })
              : <View style={{
                flex: 1,
                width: 100,
                height: 100,
              }} />

          }
        </View>
        <Button
          onPress={this.props.onLogoutPress}
          title="Logout"
        />
      </ScrollView>
    )
  }
}