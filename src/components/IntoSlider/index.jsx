import React from 'react';
import { Text, View, Image } from 'react-native'

import AppIntroSlider from 'react-native-app-intro-slider';
import styles from '../../styles'

const slides = [
    {
        key: 'k1',
        title: 'title1',
        text: 'text1',
        image: {
            uri:
                '../../assets/favicon.png',
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

const _renderItem = ({ item }) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );
}

export class IntroSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppIntroSlider
                renderItem={_renderItem}
                data={slides}
                onDone={() => this.props.setShowApp(true)}
                showSkipButton={true}
                onSkip={() => this.props.setShowApp(true)} />
        );
    }
}
