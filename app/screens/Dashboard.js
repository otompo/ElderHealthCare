import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import ListItems from "../components/ListItems";
import ListItem from "../components/ListItem";

const InitialPatients = [
  {
    id: 1,
    name: "Musah Eben",
    age: 90,
    height: "5ft",
    gender: "Male",
    address: "Sunyani area one Zongo",
    description: "Lorem Epsum",
    matritalStatus: "Single",
    email: "eben@gmail.com",
    states: "Bono",
    contact: "0245785462",
    description: "Lorem epsum Lorem epsum Lorem epsumLorem epsumLorem epsum",
    image: {
      uri: "https://cdn.pixabay.com/photo/2016/11/23/00/33/man-1851469_960_720.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
  {
    id: 2,
    name: "Ransben",
    age: 70,
    height: "5ft",
    gender: "Male",
    address: "Sunyani area one Zongo",
    description: "Lorem Epsum",
    matritalStatus: "Single",
    email: "ransben@gmail.com",
    states: "Bono",
    contact: "0245785462",
    image: {
      uri: "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
  {
    id: 3,
    name: "Frank Kuma",
    age: 82,
    height: "5ft",
    gender: "Male",
    description: "Lorem Epsum",
    address: "Sunyani area one Zongo",
    matritalStatus: "Single",
    email: "frank@gmail.com",
    states: "Bono",
    contact: "0245785462",
    image: {
      uri: "https://cdn.pixabay.com/photo/2016/01/18/20/11/old-man-1147288_960_720.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
  {
    id: 4,
    name: "Kofi Yaw",
    gender: "Male",
    age: 80,
    height: "5ft",
    description: "Lorem Epsum",
    address: "Sunyani area one Zongo",
    matritalStatus: "Single",
    email: "ransben@gmail.com",
    states: "Bono",
    contact: "0245785462",
    image: {
      uri: "https://cdn.pixabay.com/photo/2016/01/28/10/20/old-man-1166066_960_720.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
  {
    id: 5,
    name: "Ama Frank",
    age: 84,
    height: "5ft",
    gender: "Male",
    address: "Sunyani area one Zongo",
    description: "Lorem Epsum",
    matritalStatus: "Single",
    email: "ama@gmail.com",
    states: "Bono",
    contact: "0245785462",
    image: {
      uri: "https://cdn.pixabay.com/photo/2016/03/26/12/10/granny-1280445__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
  {
    id: 6,
    name: "Mavis",
    age: 33,
    height: "5ft",
    gender: "Female",
    address: "Sunyani area one Zongo",
    matritalStatus: "Single",
    email: "mavis@gmail.com",
    states: "Bono",
    contact: "0245785462",
    image: {
      uri: "https://cdn.pixabay.com/photo/2016/11/21/12/54/man-1845259__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
  {
    id: 7,
    name: "Aarron Dong",
    age: 32,
    height: "5ft",
    gender: "Male",
    address: "Sunyani area one Zongo",
    matritalStatus: "Single",
    email: "aarron@gmail.com",
    states: "Bono",
    contact: "0245785462",
    image: {
      uri: "https://cdn.pixabay.com/photo/2016/10/18/05/16/woman-1749355__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
  {
    id: 8,
    name: "Elsie Ayahisa",
    gender: "Female",
    age: 91,
    height: "5ft",
    address: "Sunyani area one Zongo",
    description: "Lorem Epsum",
    matritalStatus: "Single",
    email: "alsie@gmail.com",
    states: "Bono",
    contact: "0245785462",
    image: {
      uri: "https://cdn.pixabay.com/photo/2016/11/03/16/34/woman-1795054__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
  {
    id: 9,
    name: "Juliana",
    age: 90,
    height: "5ft",
    gender: "Male",
    address: "Sunyani area one Zongo",
    description: "Lorem Epsum",
    matritalStatus: "Single",
    email: "juliana@gmail.com",
    states: "Bono",
    contact: "0245785462",
    image: {
      uri: "https://cdn.pixabay.com/photo/2018/02/27/22/02/woman-3186741__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "0245365879",
    relationship: "Brother",
  },
];

function Dashboard({ navigation }) {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    setPatients(InitialPatients);
  }, []);
  return (
    <>
      <Header HeaderTitle="Dashboard" navigation={navigation} />
      <View style={styles.topHeader}>
        <Text style={styles.topHeaderText}>My Assigned Patients</Text>
      </View>
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
        // ItemSeparatorComponent={ListItemsSeprator}
        // refreshing={refreshing}
        // onRefresh={() => {
        //   setMessages(InitialMessages);
        // }}
      />
    </>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  topHeader: {
    padding: 10,
  },
  topHeaderText: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});
