import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { logout } from '../../redux/actions/user.actions'


class TopUserBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation, storedUserName } = this.props;
        return (
            <View style={styles.topBar}>
                <Text>
                    {`Logged in as ${storedUserName}`}
                </Text>
                <Button
                    title="Logout"
                    type="clear"
                    icon={{
                        name: 'exit-to-app',
                        size: 25,
                        color: 'lightblue',
                    }}
                    iconRight
                    onPress={() => {
                        return this.doLogout(navigation)
                    }} />
            </View>
        )
    }

    doLogout(navigation) {
        // There can be an old state here, so logout renavigate to dashboard. Has to be fixed.
        navigation.navigate('Logout')
        return this.props.logout()
    }
}

const styles = StyleSheet.create({
    topBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

const mapStateToProps = (state) => ({
    storedUserName: state.user.user.name,
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

TopUserBar.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    storedUserName: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(TopUserBar))
