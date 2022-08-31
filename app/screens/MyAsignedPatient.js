import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ListItems from "../components/ListItems";
import ListItem from "../components/ListItem";
import Header from "../components/Header";
import axios from "axios";
import { ActivityIndicator } from "react-native";
import colors from "../config/colors";

function MyAsignedPatient({ navigation }) {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/doctors`);
      setPatients(data.patients);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <>
      <Header HeaderTitle="My Asigned Patients" navigation={navigation} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={patients}
        keyExtractor={(patient) => patient._id.toString()}
        renderItem={({ item }) => (
          <ListItem
            iconActive={false}
            // mainTitleText="Name: "
            titleText="Age: "
            subTitleText="Address: "
            title={item.firstName + `${" "}` + item.lastName}
            mainTitle={item.lastName}
            subTitle={item.address}
            image={item.image.url}
            onPress={() => navigation.navigate("PatientDetials", item)}
          />
        )}
      />
      {/* <Text>{JSON.stringify(patients, null, 4)}</Text> */}
    </>
  );
}

export default MyAsignedPatient;

const styles = StyleSheet.create({});
