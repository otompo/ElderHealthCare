import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import HomeCard from "../components/HomeCard";

function Dashboard({ navigation }) {
  return (
    <>
      <Header HeaderTitle="Dashboard" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <HomeCard icon="hospital-marker" title="Vital checks" />
        <HomeCard icon="pill" title="Medications" />
        <HomeCard icon="alarm-bell" title="Live activity of Daily living" />
        <HomeCard
          icon="clipboard-text-clock"
          title="Activity History (summary)"
        />
        <HomeCard icon="pencil-box" title="Remarks/Recommendations" />
      </ScrollView>
    </>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
