import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import AppText from "../components/Auth/AppText";
import CircleLogo from "../components/Auth/CircleLogo";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import colors from "../config/colors";
import { Divider } from "react-native-elements";

import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import Modal from "react-native-modal";
import ModalTopInfor from "../components/ModalTopInfor";
import SubmitButton from "../components/Button/SubmitButton";
import AppTextInput from "../components/Auth/AppTextInput";
import ListItems from "../components/ListItems";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import moment from "moment";
import { Tab, TabView } from "@rneui/themed";

var { width } = Dimensions.get("window");

function PatientDetials({ route }) {
  const patient = route.params;
  const richText = React.createRef();
  const [isModalVisible, setModalVisible] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [pressure, setPressure] = useState("");
  const [pulseRate, setPulseRate] = useState("");
  const [weight, setWeight] = useState("");
  const [respiratoryRate, setRespiratoryRate] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [index, setIndex] = React.useState(0);

  useEffect(() => {}, []);

  return (
    <>
      <Header HeaderTitle="Patient's Detials" justifyContent="center" />
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: colors.danger,
          height: 3,
        }}
        variant="primary"
        containerStyle={{
          backgroundColor: colors.primary,
        }}
      >
        <Tab.Item
          title="Patients Information"
          titleStyle={{ fontSize: 12, textTransform: "uppercase" }}

          //   icon={{ name: "timer", type: "ionicon", color: "white" }}
          //   icon={
          //     <MaterialCommunityIcons name="account" color="white" size={45} />
          //   }
        />
        <Tab.Item
          title="Health History"
          titleStyle={{ fontSize: 12, textTransform: "uppercase" }}
          //   icon={
          //     <MaterialCommunityIcons name="account" color="white" size={45} />
          //   }
        />
        {/* <Tab.Item
          title="Emergency Contact"
          titleStyle={{ fontSize: 12 }}
            icon={
            <MaterialCommunityIcons name="account" color="white" size={45} />
            }
        /> */}
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ height: 100, width: "100%" }}>
          <View>
            <CircleLogo marginTop={40} height={100} width={100}>
              <Image source={{ uri: patient.image.uri }} style={styles.image} />
            </CircleLogo>

            <View style={styles.profileStyle}>
              <View style={{ margin: 10 }}>
                <AppText style={styles.title} numberOfLines={2}>
                  Personal Information
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={1}>
                  <Text style={styles.innerText}>Name: </Text>
                  {patient.name}
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={1}>
                  <Text style={styles.innerText}>Matrital Status: </Text>
                  {patient.matritalStatus}
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={1}>
                  <Text style={styles.innerText}>Date of Birth: </Text>
                  {moment(new Date()).format("LL")}
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={1}>
                  <Text style={styles.innerText}>Gender: </Text>
                  {patient.gender}
                </AppText>

                <AppText style={styles.subTitle} numberOfLines={2}>
                  <Text style={styles.innerText}>Age: </Text>
                  {patient.age} years
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>
                  <Text style={styles.innerText}>Height: </Text>
                  {patient.height}
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>
                  <Text style={styles.innerText}>City: </Text>
                  {patient.city}
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>
                  <Text style={styles.innerText}>Contact: </Text>
                  {patient.contact}
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>
                  <Text style={styles.innerText}>Address: </Text>
                  {patient.address}
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>
                  <Text style={styles.innerText}>EMAIL: </Text>
                  {patient.email}
                </AppText>

                {/* <Divider width={2} /> */}
                <AppText style={styles.title} numberOfLines={2}>
                  Emergency Contact Details
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>
                  <Text style={styles.innerText}>Name: </Text>
                  {patient.emergencyname}
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>
                  <Text style={styles.innerText}>Contact: </Text>
                  {patient.emergencycontact}
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>
                  <Text style={styles.innerText}>Relationship: </Text>
                  {patient.relationship}
                </AppText>
              </View>
            </View>
          </View>
        </TabView.Item>

        <TabView.Item style={{ width: "100%", marginBottom: 50 }}>
          <View>
            <SubHeader
              backgroundColor="light"
              buttonTitle="+ ADD Health History"
              onPress={toggleModal}
            />
            <ScrollView style={styles.healthHistory}>
              {/* <AppText style={styles.title} numberOfLines={2}>
                HEALTH HISTORY:
              </AppText> */}

              <ListItems
                iconActive={false}
                chevronActive={false}
                mainTitleText="Added By: "
                titleText="Temperature: "
                subTitleText="Pressure: "
                subSubTitleText="Respiration Rate: "
                subSubSubTitleText="Oxygen: "
                subSubSubSubTitleText="Weight: "
                subSubSubSubSubTitleText="Date:"
                mainTitle="Dr. Mensah"
                title="20"
                subTitle="70"
                subSubTitle="50"
                subSubSubTitle="80"
                subSubSubSubTitle="60"
                subSubSubSubSubTitle={moment(new Date()).format("LLL")}
                subSubSubSubSubSubTitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model"
              />

              <ListItems
                iconActive={false}
                chevronActive={false}
                mainTitleText="Added By: "
                titleText="Temperature: "
                subTitleText="Pressure: "
                subSubTitleText="Respiration Rate: "
                subSubSubTitleText="Oxygen: "
                subSubSubSubTitleText="Weight: "
                subSubSubSubSubTitleText="Date:"
                mainTitle="Dr. Mensah"
                title="20"
                subTitle="70"
                subSubTitle="50"
                subSubSubTitle="80"
                subSubSubSubTitle="60"
                subSubSubSubSubTitle={moment(new Date()).format("LLL")}
                subSubSubSubSubSubTitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model"
              />

              <ListItems
                iconActive={false}
                chevronActive={false}
                mainTitleText="Added By: "
                titleText="Temperature: "
                subTitleText="Pressure: "
                subSubTitleText="Respiration Rate: "
                subSubSubTitleText="Oxygen: "
                subSubSubSubTitleText="Weight: "
                subSubSubSubSubTitleText="Date:"
                mainTitle="Dr. Mensah"
                title="20"
                subTitle="70"
                subSubTitle="50"
                subSubSubTitle="80"
                subSubSubSubTitle="60"
                subSubSubSubSubTitle={moment(new Date()).format("LLL")}
                subSubSubSubSubSubTitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model"
              />

              <ListItems
                iconActive={false}
                chevronActive={false}
                mainTitleText="Added By: "
                titleText="Temperature: "
                subTitleText="Pressure: "
                subSubTitleText="Respiration Rate: "
                subSubSubTitleText="Oxygen: "
                subSubSubSubTitleText="Weight: "
                subSubSubSubSubTitleText="Date:"
                mainTitle="Dr. Mensah"
                title="20"
                subTitle="70"
                subSubTitle="50"
                subSubSubTitle="80"
                subSubSubSubTitle="60"
                subSubSubSubSubTitle={moment(new Date()).format("LLL")}
                subSubSubSubSubSubTitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model"
              />
              <ListItems
                iconActive={false}
                chevronActive={false}
                mainTitleText="Added By: "
                titleText="Temperature: "
                subTitleText="Pressure: "
                subSubTitleText="Respiration Rate: "
                subSubSubTitleText="Oxygen: "
                subSubSubSubTitleText="Weight: "
                subSubSubSubSubTitleText="Date:"
                mainTitle="Dr. Mensah"
                title="20"
                subTitle="70"
                subSubTitle="50"
                subSubSubTitle="80"
                subSubSubSubTitle="60"
                subSubSubSubSubTitle={moment(new Date()).format("LLL")}
                subSubSubSubSubSubTitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model"
              />
              <ListItems
                iconActive={false}
                chevronActive={false}
                mainTitleText="Added By: "
                titleText="Temperature: "
                subTitleText="Pressure: "
                subSubTitleText="Respiration Rate: "
                subSubSubTitleText="Oxygen: "
                subSubSubSubTitleText="Weight: "
                subSubSubSubSubTitleText="Date:"
                mainTitle="Dr. Mensah"
                title="20"
                subTitle="70"
                subSubTitle="50"
                subSubSubTitle="80"
                subSubSubSubTitle="60"
                subSubSubSubSubTitle={moment(new Date()).format("LLL")}
                subSubSubSubSubSubTitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model"
              />
            </ScrollView>
          </View>
        </TabView.Item>
        {/* <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item> */}
      </TabView>

      <Modal isVisible={isModalVisible}>
        <View
          style={{
            color: colors.white,
            backgroundColor: colors.white,
            borderRadius: 5,
            padding: 5,
          }}
        >
          <ModalTopInfor
            title="+ ADD HEALTH HISTORY"
            handlePress={toggleModal}
          />
          <Divider width={2} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AppTextInput
              margin={1}
              placeholder="Temperature..."
              keyboardType="numeric"
              value={temperature}
              setValue={setTemperature}
              width="50%"
            />
            <AppTextInput
              width="50%"
              autoCorrect={false}
              placeholder="Pressure..."
              keyboardType="numeric"
              value={pressure}
              setValue={setPressure}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AppTextInput
              margin={1}
              placeholder="Pulse Rate..."
              keyboardType="numeric"
              value={pulseRate}
              setValue={setPulseRate}
              width="50%"
            />
            <AppTextInput
              width="50%"
              autoCorrect={false}
              placeholder="Weight..."
              keyboardType="numeric"
              value={weight}
              setValue={setWeight}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AppTextInput
              margin={1}
              placeholder="Respiration Rate..."
              keyboardType="numeric"
              value={respiratoryRate}
              setValue={setRespiratoryRate}
              width="50%"
            />
            <AppTextInput
              //   marginHorizontal={5}
              width="50%"
              autoCapitalize="number"
              autoCorrect={false}
              placeholder="Oxygen..."
              keyboardType="numeric"
              value={oxygen}
              setValue={setOxygen}
            />
          </View>
          <View style={styles.richTextContainer}>
            <RichEditor
              ref={richText}
              //   onChange={richTextHandle}
              placeholder="Write your cool content here :)"
              androidHardwareAccelerationDisabled={true}
              style={styles.richTextEditorStyle}
              initialHeight={250}
              //   initialContentHTML={description}
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
          </View>
          <SubmitButton
            title="Save"
            //     onPress={handleUpdateSubmit}
            //     loading={loading}
          />
        </View>
      </Modal>
    </>
  );
}

export default PatientDetials;

const styles = StyleSheet.create({
  profileStyle: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 25,
    // marginBottom: 125,
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingTop: 25,
  },
  subTitle: {
    fontSize: 16,
    color: colors.gray,
  },
  innerText: { color: colors.dark },
  emergency: {
    paddingHorizontal: 15,
  },
  healthHistory: {
    paddingHorizontal: 10,
    marginBottom: 30,
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
