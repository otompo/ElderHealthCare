import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import HomeCard from "../components/HomeCard";

function DailyLiving(props) {
  return (
    <>
      <Header
        HeaderTitle="Live activity of Daily living"
        justifyContent="center"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <HomeCard icon="bed" title="Bedroom" />
        <HomeCard icon="sofa" title="Living room" />
        <HomeCard icon="chair-rolling" title="Study area" />
        <HomeCard icon="shower" title="Bathroom" />
        <HomeCard icon="countertop" title="Kitchen" />
        <HomeCard icon="walk" title="Walkway " />
      </ScrollView>
    </>
  );
}

export default DailyLiving;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
