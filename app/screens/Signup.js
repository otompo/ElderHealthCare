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
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppTextInput from "../components/Auth/AppTextInput";
import SubmitButton from "../components/Button/SubmitButton";
// import CircleLogo from "../components/Auth/CircleLogo";
import DatePicker from "../components/DatePicker/DatePicker";
import colors from "../config/colors";
import axios from "axios";
import Header from "../components/Header";
import { ImageBackground } from "react-native";
var { width } = Dimensions.get("window");

function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const [state, setState] = useContext(AuthContext);
  //   const { name, companyLogo } = useSettings();

  // useEffect(() => {
  //   if (state) {
  //     navigation.navigate("Dashboard");
  //   }
  // }, []);

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
      <Header HeaderTitle="Signup" justifyContent="center" />
      <ImageBackground
        source={require("../assets/old.webp")}
        style={{ flex: 1, height: "100%" }}
        resizeMode="cover"
        blurRadius={1}
      >
        <View style={styles.container}>
          <View style={styles.LoginHeader}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "700",
                color: "#333",
              }}
            >
              Welcome,
            </Text>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                fontFamily: "sans-serif",
                color: "#555",
                marginBottom: -15,
              }}
            >
              Crate an account to continue!
            </Text>
          </View>
          <View style={styles.LoginBox}>
            <AppTextInput
              autoCapitalize="words"
              autoCorrect={false}
              icon="account"
              placeholder="Name..."
              keyboardType="words"
              value={name}
              setValue={setName}
            />
            <AppTextInput
              autoCapitalize="number"
              autoCorrect={false}
              icon="phone"
              placeholder="Contact..."
              keyboardType="numeric"
              value={contact}
              setValue={setContact}
            />
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
              autoCorrect={false}
              icon="map-marker"
              placeholder="Address..."
              keyboardType="words"
              value={address}
              setValue={setAddress}
            />
            {/* <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            value={password}
            setValue={setPassword}
            placeholder="Password..."
            secureTextEntry
            textContentType="password"
            autoCompleteType="password"
          /> */}
            <DatePicker
              date={dateOfBirth}
              setDate={setDateOfBirth}
              titleOne="Date"
              subTitle="of Birth"
              maximumDate={new Date()}
            />
            <View style={styles.Button}>
              <SubmitButton
                title="Signup"
                onPress={handleSubmit}
                loading={loading}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: width / 10 - 20,
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                color: "#333",
                fontSize: 15,
              }}
            >
              Already have a account ?
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  fontSize: 15,
                  color: colors.danger,
                  paddingRight: 15,
                }}
              >
                {" "}
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default Signup;
const styles = StyleSheet.create({
  container: {
    width: width * 1,
    padding: 20,
    // backgroundColor: colors.white,
    height: width * 2,
  },
  LoginHeader: {
    width: width * 1,
    paddingLeft: 10,
    paddingTop: width / 9 - 20,
  },

  LoginBox: {
    marginTop: width / 7,
  },
  Button: {
    marginTop: 20,
  },
});
