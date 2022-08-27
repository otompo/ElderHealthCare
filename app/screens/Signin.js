import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  ToastAndroid,
  Platform,
  AlertIOS,
  Image,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppTextInput from "../components/Auth/AppTextInput";
import SubmitButton from "../components/Button/SubmitButton";
// import CircleLogo from "../components/Auth/CircleLogo";
// import { AuthContext } from "../context/authContext";
import colors from "../config/colors";
import axios from "axios";
import CircleLogo from "../components/Auth/CircleLogo";
import Header from "../components/Header";
var { width } = Dimensions.get("window");

function Signin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [state, setState] = useContext(AuthContext);
  //   const { name, companyLogo } = useSettings();

  useEffect(() => {
    // if (state) {
    //   navigation.navigate("Dashboard");
    // }
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      if (Platform.OS === "android") {
        ToastAndroid.showWithGravityAndOffset(
          "All fields are required",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else {
        AlertIOS.alert("All fields are required");
      }
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(`/api/auth/signin`, {
        email,
        password,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        // setState(data);
        // await AsyncStorage.setItem("@auth", JSON.stringify(data));
        setEmail("");
        setPassword("");
        setLoading(false);
        if (Platform.OS === "android") {
          ToastAndroid.showWithGravityAndOffset(
            "success",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
          );
        } else {
          AlertIOS.alert("success");
        }
        navigation.navigate("Dashboard");
      }
    } catch (err) {
      setLoading(false);
      if (Platform.OS === "android") {
        ToastAndroid.showWithGravityAndOffset(
          err.response.data.message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else {
        AlertIOS.alert(err.response.data.message);
      }
    }
  };

  return (
    <>
      <Header HeaderTitle="Signin" justifyContent="center" />
      <ImageBackground
        source={require("../assets/elderly.png")}
        style={{ flex: 1, height: "100%" }}
        resizeMode="cover"
        blurRadius={2}
      >
        <View style={styles.logoContainer}>
          <CircleLogo height={160} width={160}>
            <Image
              source={require("../assets/icon.png")}
              style={{
                height: 160,
                width: 160,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: colors.primary,
              }}
            />
          </CircleLogo>
        </View>

        <View style={styles.MainContainer}>
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            placeholder="Email..."
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            setValue={setEmail}
          />

          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            value={password}
            setValue={setPassword}
            placeholder="Password..."
            secureTextEntry
            textContentType="password"
            autoCompleteType="password"
          />

          <SubmitButton
            title="Signin"
            onPress={handleSubmit}
            loading={loading}
          />
          <Text center style={{ marginTop: 17 }}>
            Don't have an account?{" "}
            <Text
              onPress={() => navigation.navigate("Signup")}
              style={{ color: colors.danger }}
            >
              Create Account
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}

export default Signin;

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    backgroundColor: colors.white,
  },
  MainContainer: {
    // flex: 1,
    width: width * 1,
    padding: 20,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    height: width * 1,
  },
  logoContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: -15,
  },
});
