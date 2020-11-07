import React from 'react';
import { Text, View } from 'react-native'
import styles from '../../styles'

export class Tochka extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { point, name } = this.props;
        return <View style={styles.constrainerCentered} key={point.code}>
            <Text >
                {point.code}
            </Text>
            <Text >
                {point.name}
            </Text>
            <Text >
                {point.confirmUserId}
            </Text>
            <Text >
                {point.confirmDate}
            </Text>
        </View>
    }
}

export default Tochka;