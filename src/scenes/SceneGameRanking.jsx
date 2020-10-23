import React from 'react'
import { Text, View} from 'react-native'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import BottomNavBar from '../components/BottomNavBar'
import TopUserBar from '../components/TopUserBar'
import styles from '../styles'

const SceneGameRanking = () => (
    <DefaultPage isHome>
        <TopUserBar />
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>Ranking Page</Text>
            </View>
            <View style={styles.headerPanel}>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>Ranking Page text</Text>
            </View>
            </View>
        </Panel>
        <BottomNavBar />
    </DefaultPage>
)

export default SceneGameRanking
