import React, { Component } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default class Secured extends Component {

  state = {
    probaResponceReceived: false,
    probaPoints: []
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
    const getHeader = () => {
      return <Text>{'My Title'}</Text>;
  };

  const getFooter = () => {
    if (this.state.loading) {
        return null;
    }
    return <Button
    onPress={this.props.onLogoutPress}
    title="Logout"
  />;
};
      
    return (
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.container}>
        <FlatList
          data={this.state.probaPoints}
          renderItem={({item}) => <Text style={styles.item}>{item.key} {item.code} {item.name} {item.confirmUserId} {item.confirmDate}</Text>}
          ListHeaderComponent={getHeader}
          ListFooterComponent={getFooter}
        />

</View>

</ScrollView>
)
  }
}