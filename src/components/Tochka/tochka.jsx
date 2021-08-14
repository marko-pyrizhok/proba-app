import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles";
import tochkaStyles from "./tochka.style";
import Swipeout from "react-native-swipeout";
import PropTypes from "prop-types";
import { MarkButton } from "./mark/mark-button";

export class Tochka extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { confirmProbaPoint, point, probaId } = this.props;

    const buttonsForInitialTochka = [
      {
        component: (
          <View
            style={[
              {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              },
            ]}
          >
            <MarkButton />
          </View>
        ),
        onPress: () => confirmProbaPoint(probaId, point.id),
      },
    ];
    var swipeoutButtons = buttonsForInitialTochka;
    let evenRow = point.id % 2 == 0;

    return (
      <View style={[styles.constrainerCentered]} key={point.code}>
        <Swipeout right={swipeoutButtons}>
          <View>
            <Text>{point.code}</Text>
            <Text
              style={[
                tochkaStyles.cardStyleOdd,
                evenRow && tochkaStyles.cardStyleEven,
                !point.confirmUserId &&
                  point.confirmDate &&
                  tochkaStyles.cardStyleMarked,
                point.confirmUserId &&
                  point.confirmDate &&
                  tochkaStyles.cardStyleConfirmed,
              ]}
            >
              {point.name}
            </Text>
            <Text>{point.confirmUserId}</Text>
            <Text>{point.confirmDate}</Text>
          </View>
        </Swipeout>
      </View>
    );
  }
}

Tochka.propTypes = {
  confirmProbaPoint: PropTypes.func.isRequired,
};
