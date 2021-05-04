import React from "react";
import { Text, View } from "react-native";
import markButtonStyles from "./mark-button.style";
import { Icon } from "react-native-elements";

export class MarkButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          markButtonStyles.buttonStyle,
          {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex"
          },
        ]}
      >
        <Icon
        style={[{ flex: 1 }]}
          raised
          name="check"
          type="font-awesome"
          color="#f50"
          size="2"
        />
        <Text style={[{ flex: 1 }]}>Я здав!</Text>
      </View>
    );
  }
}
