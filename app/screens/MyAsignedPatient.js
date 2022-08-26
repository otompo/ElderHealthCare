import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ListItems from "../components/ListItems";
import ListItem from "../components/ListItem";
import Header from "../components/Header";
const InitialPatients = [
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
      uri: "https://cdn.pixabay.com/photo/2016/01/28/10/20/old-man-1166066_960_720.jpg",
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
    name: "Anna Doe",
    age: 33,
    height: "5ft",
    gender: "Female",
    address: "Wierzbica",
    matritalStatus: "Single",
    city: "Highland",
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
      uri: "https://cdn.pixabay.com/photo/2016/10/18/05/16/woman-1749355__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "07747822022",
    relationship: "Brother",
  },
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
      uri: "https://cdn.pixabay.com/photo/2016/11/03/16/34/woman-1795054__340.jpg",
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
      uri: "https://cdn.pixabay.com/photo/2018/02/27/22/02/woman-3186741__340.jpg",
    },
    emergencyname: "Gari Smith",
    emergencycontact: "05747836322",
    relationship: "Brother",
  },
];

function MyAsignedPatient({ navigation }) {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    setPatients(InitialPatients);
  }, []);
  return (
    <>
      <Header HeaderTitle="My Asigned Patients" navigation={navigation} />

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

export default MyAsignedPatient;

const styles = StyleSheet.create({});
