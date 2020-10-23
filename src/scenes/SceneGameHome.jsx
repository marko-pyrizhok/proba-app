import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'
import BottomNavBar from '../components/BottomNavBar'
import TopUserBar from '../components/TopUserBar'

const SceneGameHome = ({ storedUserName }) => (
    <DefaultPage isHome>
        <TopUserBar />
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>PLAY TIME!</Text>
            </View>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>PLAY TIME!</Text>
                <Text>
                    {`Let's play a game, ${storedUserName}!`}
                </Text>
            </View>
        </Panel>
        <BottomNavBar />
    </DefaultPage>
)

const mapStateToProps = (state) => ({
    storedUserName: state.user.name,
})

SceneGameHome.propTypes = {
    storedUserName: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(SceneGameHome)
