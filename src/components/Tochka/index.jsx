import React from 'react';
import { Text, View } from 'react-native'
import styles from '../../styles'
import tochkaStyles from './tochka.style'
import Swipeout from 'react-native-swipeout';
import { confirmProbaPoint } from '../../redux/actions/proba.action'

export class Tochka extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { point, probaId } = this.props;

        var swipeoutButtons = [
            {
                text: 'Я Здав!',
                onPress: confirmProbaPoint(probaId, point.id)
            }
        ]
        let evenRow = point.id % 2 == 0;

        return <View
            style={[styles.constrainerCentered]}
            key={point.code}>
            <Swipeout right={swipeoutButtons}>
                <View>
                    <Text>{point.code}</Text>
                    <Text style={[
                        tochkaStyles.cardStyleOdd, 
                        evenRow && tochkaStyles.cardStyleEven, 
                        !point.confirmUserId && point.confirmDate && tochkaStyles.cardStyleMarked,
                        point.confirmUserId && point.confirmDate && tochkaStyles.cardStyleConfirmed]}>
                        {point.name}
                    </Text>
                    <Text>{point.confirmUserId}</Text>
                    <Text>{point.confirmDate}</Text>
                </View>
            </Swipeout>
        </View>
    }
}

export default Tochka;