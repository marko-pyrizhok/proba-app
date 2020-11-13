import React from 'react';
import { Text, View } from 'react-native'
import styles from '../../styles'
import Swipeout from 'react-native-swipeout';


export class Tochka extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { point, name } = this.props;

        var swipeoutBtns = [
            {
              text: 'Button'
            }
          ] 
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
            <Swipeout right={swipeoutBtns}>
  <View>
    <Text>Swipe me left</Text>
  </View>
</Swipeout>
        </View>
    }
}

export default Tochka;