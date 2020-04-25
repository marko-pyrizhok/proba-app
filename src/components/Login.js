import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator
} from 'react-native';

export default class Login extends Component {

    _isMounted = false;

    state = {
        username: '',
        password: '',
        isLoggingIn: false,
        message: '',
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    _userLogin = () => {

        this.setState({ isLoggingIn: true, message: '' });

        var params = {
            username: this.state.username,
            password: this.state.password,
        };

        var jsonLogin = JSON.stringify(params);

        var proceed = false;
        fetch("https://proba-api.herokuapp.com/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonLogin
            })
            .then((response) => response.json())
            .then((response) => {
                if (response.token!=null) {
                    proceed = true;
                    this.props.onLoginPress("Bearer "+response.token)
                } else {
                    if (this._isMounted) {
                        this.setState({ message: response.message });
                    }
                }
                if (this._isMounted) {
                    this.setState({ isLoggingIn: false })
                }
            })
            .catch(err => {
				this.setState({ message: err.message });
				this.setState({ isLoggingIn: false })
			});
    }

    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
				<Text 
					style={{fontSize: 27}}>
					Login
				</Text>
				<TextInput
					ref={component => this._username = component}
					placeholder='Username' 
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
				/>
				<TextInput 
					ref={component => this._password = component}
					placeholder='Password' 
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					onFocus={this.clearPassword}
					onSubmitEditing={this._userLogin}
				/>
				{!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}
				<View style={{margin:7}} />
				<Button 
					disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
		      		onPress={this._userLogin}
		      		title="Submit"
		      	/>
	      </ScrollView>
        )
    }
}