import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'
import BottomNavBar from '../components/BottomNavBar'
import TopUserBar from '../components/TopUserBar'
import { fetchProbaPoints } from '../redux/actions/proba.action'
import  Tochka from '../components/Tochka/tochka.container'

function ProbaScene({ dispatch, storedUserName, points, probaId, loading, hasErrors }) {
    useEffect(() => {
        dispatch(fetchProbaPoints())
    }, [dispatch])
    return (
        <DefaultPage isHome>
            <TopUserBar />
            <Panel>
                <View style={styles.headerPanel}>
                    <Text style={styles.headline}>ProbaScene TIME!</Text>
                </View>
                <View style={styles.headerPanel}>
                    <Text style={styles.headline}>ProbaScene TIME!</Text>
                    <Text>
                        {`ProbaScene data for ${storedUserName}!`}
                    </Text>
                </View>
                <View style={styles.headerPanel}>

                    {renderPoints()}
                </View>
            </Panel>
            <BottomNavBar />
        </DefaultPage>
    )

    function renderPoints() {
        if (loading) return <Text>Loading points...</Text>
        if (hasErrors) return <Text>Unable to display points.</Text>
        if (points && points.length > 0) {
            return points.map(point => <Tochka key={point.code} point={point} probaId={probaId} dispatch={dispatch}/>)
        }

    }

}


const mapStateToProps = (state) => ({
    storedUserName: state.user.user.name,
    loading: state.proba.loading,
    points: state.proba.points,
    probaId: state.proba.probaId,
    hasErrors: state.proba.hasErrors,
})

ProbaScene.propTypes = {
    storedUserName: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    points: PropTypes.arrayOf(PropTypes.object),
    hasErrors: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(ProbaScene)
