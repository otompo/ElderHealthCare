import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  AlertIOS,
  Image,
  Text,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../config/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import Text from "@kaloraat/react-native-text";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import SubmitButton from "../components/Button/SubmitButton";
import AppTextInput from "../components/Auth/AppTextInput";
import CircleLogo from "../components/Auth/CircleLogo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/authContext";
import Header from "../components/Header";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
// import { Avatar } from "react-native-paper";
import moment from "moment";

const TopTabNavigator = createMaterialTopTabNavigator();

function AccountScreen({ navigation }) {
  // const richText = React.createRef();
  const [auth, setAuth] = useContext(AuthContext);
  const [uploadImage, setUploadImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  // const [bio, setBio] = useState("");
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth.user) {
      const { name, contactNum, email } = auth && auth.user;
      setName(name);
      setContactNum(contactNum);
      setEmail(email);
      // setBio(bio);
      // setImage(profle_image);
    }
  }, [auth]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await axios.put(`/api/profile/updateprofile`, {
        name,
        email,
        contactNum,
        bio,
      });

      if (auth?.user?._id === data._id) {
        setAuth({ ...auth, user: data });
        let fromLocalStorage = JSON.parse(await AsyncStorage.getItem("@auth"));
        // console.log("First", fromLocalStorage);
        fromLocalStorage.user = data;
        await AsyncStorage.setItem("@auth", JSON.stringify(fromLocalStorage));
        // console.log("SEC", fromLocalStorage);
      }

      if (Platform.OS === "android") {
        ToastAndroid.showWithGravityAndOffset(
          "Success",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else {
        AlertIOS.alert("Success");
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      // alert(err);
      setLoading(false);
    }
  };

  // const richTextHandle = (bio) => {
  //   setBio(bio);
  // };

  const handleUpload = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    // console.log(permissionResult);
    if (permissionResult.granted !== true) {
      alert("Camera access is required");
      return;
    }
    // get image from user
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1,
    });
    // console.log(pickeResult);
    if (!pickerResult.cancelled) {
      let base64Image = `data:image/jpg;base64,${pickerResult.base64}`;
      // save image to state for preview
      // console.log(base64Image);
      setUploadImage(base64Image);
      // send to backend for uploading to clouldnary

      const { data } = await axios.post(`/api/upload-image`, {
        image: base64Image,
      });
      // console.log(data);
      // update user async storage
      const as = JSON.parse(await AsyncStorage.getItem("@auth"));
      // it has {user:{}, token}
      as.user = data;
      // console.log("UPDATED DATA", data);
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      // update  constext
      setState({ ...state, user: data });
      setImage(data.image);
      alert("Profile image saved successfully");
    }
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={100}
      enableOnAndroid={true}
      extraHeight={80}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        marginHorizontal: 5,
      }}
    >
      <ScrollView>
        <CircleLogo marginTop={20}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2021/12/22/03/11/self-care-6886599__340.jpg",
            }}
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginVertical: 20,
              shadowColor: "#171717",
              shadowOffset: { width: -1, height: 2 },
              shadowOpacity: 5,
              shadowRadius: 3,
              elevation: 7,
            }}
          />
        </CircleLogo>

        <View style={{ marginHorizontal: 15 }}>
          <AppTextInput
            autoCapitalize="words"
            autoCorrect={false}
            icon="account"
            placeholder="Enter your full name"
            value={name}
            setValue={setName}
          />
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            placeholder="Enter Email..."
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            setValue={setEmail}
          />
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            placeholder="Phone Number"
            keyboardType="numeric"
            value={contactNum}
            setValue={setContactNum}
          />

          {/* <View style={styles.richTextContainer}>
            {bio && bio ? (
              <>
                <RichEditor
                  ref={richText}
                  onChange={richTextHandle}
                  placeholder="Write your cool content here :)"
                  androidHardwareAccelerationDisabled={true}
                  style={styles.richTextEditorStyle}
                  initialHeight={250}
                  initialContentHTML="{bio} {bio} {bio} {bio}"
                />
                <RichToolbar
                  editor={richText}
                  selectedIconTint="#0288F5"
                  iconTint="#FFFFFF"
                  actions={[
                    actions.removeFormat,
                    actions.setBold,
                    actions.setItalic,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                    actions.insertLink,
                    actions.setUnderline,
                    actions.undo,
                    actions.redo,
                  ]}
                  iconMap={{
                    [actions.heading1]: ({ tintColor }) => (
                      <Text style={[{ color: tintColor }]}>H1</Text>
                    ),
                  }}
                  style={styles.richTextToolbarStyle}
                />
              </>
            ) : null}
          </View> */}
          <SubmitButton
            title="Update"
            onPress={handleSubmit}
            loading={loading}
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}

function PasswordScreen() {
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.put(`/api/user/updatepassword`, {
        prevPassword,
        newPassword,
        c_password,
      });
      setPrevPassword("");
      setNewPassword("");
      setC_Password("");
      if (Platform.OS === "android") {
        ToastAndroid.showWithGravityAndOffset(
          "Success",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      } else {
        AlertIOS.alert("Success");
      }
      setLoading(false);
    } catch (err) {
      // console.log(err.response);
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
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={100}
      enableOnAndroid={true}
      extraHeight={80}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        marginHorizontal: 5,
      }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerLine}>
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Update Password
          </Text>
        </View>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          value={prevPassword.toString()}
          setValue={setPrevPassword}
          placeholder="Current Password"
          secureTextEntry
          textContentType="password"
          autoCompleteType="password"
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          value={newPassword.toString()}
          setValue={setNewPassword}
          placeholder="New Password"
          secureTextEntry
          textContentType="password"
          autoCompleteType="password"
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          value={c_password.toString()}
          setValue={setC_Password}
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
          autoCompleteType="password"
        />

        <SubmitButton
          title="Update"
          onPress={handlePasswordChange}
          loading={loading}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}

function TopTabs() {
  return (
    <TopTabNavigator.Navigator
      initialRouteName="History"
      screenOptions={{
        tabBarActiveTintColor: colors.dark,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          color: colors.white,
        },
        tabBarStyle: { backgroundColor: colors.primary },
      }}
    >
      <TopTabNavigator.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              color={colors.white}
              size={26}
            />
          ),
        }}
      />
      <TopTabNavigator.Screen
        name="Password"
        component={PasswordScreen}
        options={{
          tabBarLabel: "Password",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="lock"
              color={colors.white}
              size={26}
            />
          ),
        }}
      />
    </TopTabNavigator.Navigator>
  );
}

function Profile({ navigation }) {
  return (
    <>
      <Header navigation={navigation} HeaderTitle="Profile" />
      <TopTabs />
    </>
  );
}
export default Profile;

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    justifyContent: "space-between",
    marginHorizontal: 5,
    backgroundColor: colors.white,
  },
  container: {
    marginTop: 15,
    alignItems: "center",
    padding: 10,
  },
  icon: {
    position: "absolute",
    top: 125,
    right: 110,
    elevation: 3,
  },
  headerLine: {
    margin: 20,
  },
  richTextContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    marginBottom: 10,
  },

  richTextEditorStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
    overflow: "hidden",
  },

  richTextToolbarStyle: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },
});
