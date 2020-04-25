import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default class Secured extends Component {

componentDidMount() {

    fetch("https://proba-api.herokuapp.com/my-proba", {
      credentials: 'include',
      mode: 'cors',
                method: "GET",
                headers: {
                    'Authorization': this.props.token
                }
            })
            .then((response) => response.json())
            .then((response) => {
                if (response!=null) {
                    console.log(response);
                }
            })
            .catch(err => {
			});
}

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    {this.props.token}
                </Text>
                <View style={{margin:20}} />
                <Button
                            onPress={this.props.onLogoutPress}
                            title="Logout"
                        />
                </ScrollView>
                )
    }
}