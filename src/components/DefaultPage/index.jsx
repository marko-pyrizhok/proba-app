import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import styles from '../../styles'

const DefaultPage = ({ children }) => (
    <ScrollView contentContainerStyle={styles.constrainerCentered}>
        {children}
    </ScrollView>
)

DefaultPage.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultPage
