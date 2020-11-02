import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'
import BottomNavBar from '../components/BottomNavBar'
import TopUserBar from '../components/TopUserBar'

const DashboardScene = ({ storedUserName }) => (
    <DefaultPage isHome>
        <TopUserBar />
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>DASHBOARD TIME!</Text>
            </View>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>DASHBOARD TIME!</Text>
                <Text>
                    {`Dashboard data for ${storedUserName}!`}
                </Text>
            </View>
        </Panel>
        <BottomNavBar />
    </DefaultPage>
)

const mapStateToProps = (state) => ({
    storedUserName: state.user.user.name,
})

DashboardScene.propTypes = {
    storedUserName: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(DashboardScene)
