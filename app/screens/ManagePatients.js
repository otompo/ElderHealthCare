import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Modal from "react-native-modal";
import AppTextInput from "../components/Auth/AppTextInput";
import ModalTopInfor from "../components/ModalTopInfor";
import SubmitButton from "../components/Button/SubmitButton";
import DatePicker from "../components/DatePicker/DatePicker";
import colors from "../config/colors";
import { Divider } from "react-native-elements";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
var { width } = Dimensions.get("window");
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import ListItem from "../components/ListItem";

const InitialPatients = [
  {
    id: 8,
    name: "Elsie White",
    gender: "Female",
    age: 91,
    height: "5ft",
    address: "Dalmatovo",
    description: "Lorem Epsum",
    matritalStatus: "Single",
    email: "alsie@gmail.com",
    city: "Rochester-upon-Medway",
    contact: "07747836300",
    image: {
      uri: "https://cdn.pixabay.com/photo/2015/07/14/19/01/old-lady-845225__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "07740036322",
    relationship: "Brother",
  },
  {
    id: 9,
    name: "Juliana Smith",
    age: 90,
    height: "5ft",
    gender: "Female",
    address: "Petropavlovskaya",
    description: "Lorem Epsum",
    matritalStatus: "Single",
    email: "smith@gmail.com",
    city: "Norwich",
    contact: "07787836322",
    image: {
      uri: "https://cdn.pixabay.com/photo/2017/10/03/09/02/lady-2811666__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "05747836322",
    relationship: "Brother",
  },

  {
    id: 3,
    name: "Ernest Addo Manu",
    age: 82,
    height: "5.1ft",
    gender: "Male",
    description: "Autism",
    address: "Iq Akwright House",
    city: "London",
    matritalStatus: "Single",
    email: "romeo@gmail.com",
    CountQueuingStrategy: "Pudesey",
    contact: "07747836322",
    image: {
      uri: "https://cdn.pixabay.com/photo/2016/01/18/20/11/old-man-1147288_960_720.jpg",
    },
    emergencyname: "George Addo Kuffour",
    emergencycontact: "07747836322",
    relationship: "Brother",
  },

  {
    id: 2,
    name: "Dacosta Owusu",
    age: 70,
    height: "5.2ft",
    gender: "Male",
    address: " 8 Bowling Street",
    description: "ALzheimer's",
    matritalStatus: "Married",
    email: "dowusu@gmail.com",
    CountQueuingStrategy: "Leeds",
    city: "East Cambridgeshire ",
    contact: "0245785462",
    image: {
      uri: "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg",
    },
    emergencyname: "Abigail Owusu",
    emergencycontact: "07747836322",
    relationship: "Wife",
  },
  {
    id: 1,
    name: "Ebenezer Adjei",
    age: 90,
    height: "5.4ft",
    gender: "Male",
    address: "16 Tumbling Hills Street",
    matritalStatus: "Divorced",
    email: "ebenezeradjei91@gmail.com",
    CountQueuingStrategy: "Bradford",
    city: "Sandhurst",
    contact: "07747836322",
    description: "Diagnosed with a terminal dimentia and traces of autism",
    image: {
      uri: "https://cdn.pixabay.com/photo/2016/11/23/00/33/man-1851469_960_720.jpg",
    },
    emergencyname: "Rudolf Adjei",
    emergencycontact: "+233507146018",
    relationship: "Brother",
  },

  {
    id: 4,
    name: "Lilian Afful",
    gender: "Female",
    age: 80,
    height: "5ft",
    city: "North Lanarkshire",
    description: "Learning disability",
    address: "Norcroft building",
    matritalStatus: "Single",
    email: "missafful@gmail.com",
    CountQueuingStrategy: "Bradford",
    contact: "07747836322",
    image: {
      uri: "https://cdn.pixabay.com/photo/2019/12/12/08/26/portrait-4690094__340.jpg",
    },
    emergencyname: "Ebenezer Adjei",
    emergencycontact: "07747836322",
    relationship: "Brother",
  },
  {
    id: 5,
    name: "Nicolis Frank",
    age: 84,
    height: "5ft",
    gender: "Male",
    address: "Norcroft building",
    description: "Learning disability",
    matritalStatus: "Single",
    email: "ama@gmail.com",
    city: "Sunderland",
    contact: "07747400322",
    image: {
      uri: "https://cdn.pixabay.com/photo/2015/10/16/19/47/man-991725__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
  {
    id: 6,
    name: "Anna Doe",
    age: 33,
    height: "5ft",
    gender: "Female",
    address: "Wierzbica",
    matritalStatus: "Single",
    city: "Highland",
    email: "mavis@gmail.com",
    states: "Bono",
    contact: "07700836322",
    image: {
      uri: "https://cdn.pixabay.com/photo/2016/10/13/13/18/grandmother-1737756__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
  {
    id: 7,
    name: "Aarron Peter",
    age: 32,
    height: "5ft",
    gender: "Male",
    address: "Damaying",
    matritalStatus: "Single",
    email: "aarron@gmail.com",
    city: "Brighton",
    contact: "07741116322",
    image: {
      uri: "https://cdn.pixabay.com/photo/2015/07/14/06/06/people-844209__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "07747822022",
    relationship: "Brother",
  },
];

const selecteMatritalStatus = () => {
  return [
    {
      name: "Widower",
    },
    {
      name: "Widow",
    },

    {
      name: "Married",
    },
    {
      name: "Single",
    },
  ];
};

const selecteGender = () => {
  return [
    {
      name: "Male",
    },
    {
      name: "Female",
    },

    {
      name: "Others",
    },
  ];
};

function ManagePatients({ navigation }) {
  const richText = React.createRef();
  const [patients, setPatients] = useState([]);
  const [matritalStatus, setMatritalStatus] = useState(selecteMatritalStatus);
  const [selectedMatritalStatus, setSelectedMatritalStatus] = useState("");
  const [selectedGender, setSelectedGender] = useState(" ");
  const [gender, setGender] = useState(selecteGender);
  const [isModalVisible, setModalVisible] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [height, setHeight] = useState("");
  const [emergencyname, setEmergencyname] = useState("");
  const [emergencycontact, setEmergencycontact] = useState("");
  const [relationship, setRelationship] = useState("");
  const [avatar, setAvatar] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setPatients(InitialPatients);
  }, []);

  return (
    <>
      <Header navigation={navigation} HeaderTitle="Manage Patients" />
      <SubHeader
        // loading={loading}
        buttonTitle="+ Add Patient"
        onPress={toggleModal}
        backgroundColor="toolbar"
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={patients}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            iconActive={false}
            // mainTitleText="Name: "
            titleText="Age: "
            subTitleText="Address: "
            title={item.name}
            // mainTitle={item.name}
            subTitle={item.address}
            image={item.image}
            onPress={() => navigation.navigate("PatientDetials", item)}
            // renderLeftActions={() => (
            //   <ListItemAchieveAction onPress={() => handleDelete(item)} />
            // )}
            // renderRightActions={() => (
            //   <ListItemDeleteAction onPress={() => handleDelete(item)} />
            // )}
          />
        )}
      />
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            color: colors.white,
            backgroundColor: colors.white,
            borderRadius: 5,
            // padding: 5,
          }}
        >
          <ModalTopInfor
            title="+ ADD PATIENT"
            handlePress={toggleModal}
            backgroundColor="toolbar"
            borderRadius={0}
            color="white"
          />

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              paddingHorizontal: 10,
              marginBottom: 20,
            }}
          >
            <AppTextInput
              autoCapitalize="words"
              autoCorrect={false}
              placeholder="Enter name..."
              value={name}
              icon="account"
              setValue={setName}
            />
            <AppTextInput
              autoCapitalize="words"
              autoCorrect={false}
              placeholder="Enter address..."
              value={address}
              icon="map-marker"
              setValue={setAddress}
            />
            <AppTextInput
              autoCapitalize="words"
              autoCorrect={false}
              placeholder="Enter city..."
              icon="city"
              value={city}
              setValue={setCity}
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              placeholder="Enter email..."
              keyboardType="email-address"
              textContentType="emailAddress"
              value={email}
              setValue={setEmail}
            />
            <AppTextInput
              placeholder="Enter contact num..."
              keyboardType="numeric"
              value={contact}
              setValue={setContact}
              icon="phone"
            />
            <AppTextInput
              autoCorrect={false}
              placeholder="Enter height..."
              keyboardType="numeric"
              value={height}
              icon="human-male-height-variant"
              setValue={setHeight}
            />

            <DatePicker
              date={dateOfBirth}
              setDate={setDateOfBirth}
              titleOne="Date"
              subTitle="of Birth"
              maximumDate={new Date()}
              marginLeft={-15}
            />

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={matritalStatus}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              searchPlaceholder="Search..."
              placeholder="Select matrital status..."
              value={matritalStatus}
              onChange={(item) => {
                setSelectedMatritalStatus(item.name);
              }}
              renderLeftIcon={() => (
                <MaterialCommunityIcons
                  style={styles.icon}
                  color={colors.primary}
                  name="check-circle"
                  size={20}
                />
              )}
            />
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={gender}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              searchPlaceholder="Search..."
              placeholder="Select gender..."
              value={gender}
              onChange={(item) => {
                setSelectedGender(item.name);
              }}
              renderLeftIcon={() => (
                <MaterialCommunityIcons
                  style={styles.icon}
                  color={colors.primary}
                  name="check-circle"
                  size={20}
                />
              )}
            />
            <View style={styles.relative}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri:
                      avatar === ""
                        ? "https://mern-ecommerce-stores.herokuapp.com/profile.png"
                        : avatar,
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 80,
                    resizeMode: "contain",
                    borderWidth: 1,
                    borderColor: colors.primary,
                  }}
                />
                <TouchableOpacity
                // onPress={uploadImage}
                >
                  <View
                    style={{
                      marginLeft: 10,
                      height: 50,
                      width: width * 1 - 110,
                      backgroundColor: "#f5f5f5",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: colors.primary,
                    }}
                  >
                    <Text
                      style={{
                        color: "#333",
                        fontSize: 18,
                      }}
                    >
                      Choose Photo
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "500", padding: 10 }}>
                Emergency Contact Details
              </Text>
              <Divider width={2} />
            </View>

            <AppTextInput
              autoCapitalize="words"
              autoCorrect={false}
              placeholder="Enter name..."
              value={emergencyname}
              icon="account"
              setValue={setEmergencyname}
            />
            <AppTextInput
              //   marginHorizontal={5}
              autoCapitalize="number"
              autoCorrect={false}
              placeholder="Contact num..."
              keyboardType="numeric"
              value={emergencycontact}
              setValue={setEmergencycontact}
              icon="phone"
            />
            <AppTextInput
              autoCapitalize="words"
              autoCorrect={false}
              placeholder="Enter relationship..."
              value={relationship}
              setValue={setRelationship}
              icon="connection"
            />

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
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

export default ManagePatients;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    // borderBottomColor: colors.white,
    // borderBottomWidth: 0.5,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.dark,
  },
  iconStyle: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: colors.white,
    padding: 15,
    marginHorizontal: 5,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  labelText: { fontSize: 12 },
  buttonStyle: {
    backgroundColor: colors.online,
    borderRadius: 7,
    width: "75%",
    height: "50%",
    padding: 10,
    marginLeft: 3,
  },
  leftconstiner: {
    flexDirection: "row",
    backgroundColor: colors.gray,
    minHeight: "90%",
    width: "100%",
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
