import { Button, Input } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import DefaultPage from "../components/DefaultPage";
import Icon from "react-native-vector-icons/FontAwesome";
import Panel from "../components/Panel";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signUp } from "../redux/actions/user.actions";
import styles from "../styles";

const REGISTRATION_SIGN_UP = "SIGN UP";
const USER_NAME = "User name";
const EMAIL = "EMAIL";
const PASSWORD = "Password";
const CONFIRM_PASSWORD = "Confirm Password";
const REGISTRATION_FORM_BUTTON_SIGN_UP = "SIGN ME UP!";

const panelHeader = (
  <View style={styles.headerPanel}>
    <Text style={styles.headline}>{REGISTRATION_SIGN_UP}</Text>
  </View>
);

const SignUpPage = (props) => (
  <DefaultPage isHome>
    <Panel>
      {panelHeader}
      <View style={styles.headerPanel}>
        <Input
          placeholder={EMAIL}
          name="EMAIL"
          leftIcon={<Icon name="envelope" size={24} color="black" />}
          onChangeText={(text) => props.setEmail(text)}
          value={props.email}
        />

        <Input
          placeholder={PASSWORD}
          name="PASSWORD"
          leftIcon={<Icon name="lock" size={24} color="black" />}
          onChangeText={(text) => props.setPassword(text)}
          value={props.password}
        />

        <Input
          placeholder={CONFIRM_PASSWORD}
          name="PASSWORDCONFIRM"
          leftIcon={<Icon name="lock" size={24} color="black" />}
          onChangeText={(text) => props.setConfirmPassword(text)}
          value={props.confirmPassword}
        />
        <Button
          title={REGISTRATION_FORM_BUTTON_SIGN_UP}
          onPress={() =>
            props.signUp(props.email, props.password, props.confirmPassword)
          }
        />
      </View>
    </Panel>
  </DefaultPage>
);

const SceneSignUp = ({
  signUp,
  storedUserName,
  isUserLoggedIn,
  navigation,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (isUserLoggedIn) {
      setTimeout(() => {
        navigation.navigate("Dashboard");
      }, 3000);
    }
  }, [isUserLoggedIn, storedUserName]);

  return (
    <SignUpPage
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      signUp={signUp}
      navigation={navigation}
    />
  );
};

const mapStateToProps = (state) => ({
  storedUserName: state.user.user.name,
  isUserLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password, confirmPassword) =>
    dispatch(signUp({ email, password, confirmPassword })),
});

SceneSignUp.defaultProps = {
  storedUserName: "",
};

SceneSignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  storedUserName: PropTypes.string,
  isUserLoggedIn: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SceneSignUp);
