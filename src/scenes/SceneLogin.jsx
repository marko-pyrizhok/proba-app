import React, { useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, CheckBox, Input } from 'react-native-elements'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../redux/actions/user.actions'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 'k1',
        title: 'title1',
        text: 'text1',
        image: {
            uri:
                'uri1 here',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#F7BB64',
    },
    {
        key: 'k2',
        title: 'title2',
        text: 'text2',
        image: {
            uri:
                'uri2 here',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#F7BB64',
    }
];

const LoginPage = (props) => (
    <DefaultPage isHome>
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>LOGIN</Text>
            </View>
            <View style={styles.headerPanel}>
                <Input placeholder="USER NAME OR EMAIL" onChangeText={text => props.setUserName(text)} value={props.userName} leftIcon={<Icon name="user" size={24} color="black" />} />

                <Input placeholder="PASSWORD" value={props.password} onChangeText={text => props.setPassword(text)} leftIcon={<Icon name="lock" size={24} color="black" />} />
                <CheckBox title="Keep me signed in" name="ALWAYS" checked={false} />
                <Button title="LOGIN" onPress={() => props.login(props.userName || 'Anon', props.password)} />
                <Text>{props.status}</Text>
                <Button
                    title="Registration"
                    onPress={() => props.navigation.navigate('Register')}
                />
            </View>
        </Panel>
    </DefaultPage>
);

const _renderItem = ({ item }) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );
}

const SceneLogin = ({
    login,
    storedUserName,
    isUserLoggedIn,
    navigation,
}) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('...')
    const [showRealApp, setShowApp] = useState(false)

    useEffect(() => {
        setStatus(isUserLoggedIn
            ? `Successfully logged in as ${storedUserName}`
            : '...')
        if (isUserLoggedIn) {
            setTimeout(() => {
                navigation.navigate('Dashboard')
            }, 3000)
        }
    }, [isUserLoggedIn, storedUserName])

    if (showRealApp) {
        return (
            <LoginPage
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                status={status}
                login={login}
                navigation={navigation} />
        )
    } else {
        return <AppIntroSlider
            renderItem={_renderItem}
            data={slides}
            onDone={() => setShowApp(true)}
            showSkipButton={true}
            onSkip={() => setShowApp(true)} />;
    }
}

const mapStateToProps = (state) => ({
    storedUserName: state.user.name,
    isUserLoggedIn: state.user.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    login: (name, password) => dispatch(login({ name, password })),
})

SceneLogin.defaultProps = {
    storedUserName: '',
}

SceneLogin.propTypes = {
    login: PropTypes.func.isRequired,
    storedUserName: PropTypes.string,
    isUserLoggedIn: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneLogin)
