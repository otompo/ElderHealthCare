import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";

function ModalTopInfor({
  title,
  handlePress,
  backgroundColor = "white",
  borderRadius = 5,
  color = "primary",
}) {
  return (
    <View
      style={[
        {
          // flex: 1,
          color: colors.white,

          padding: 10,
        },
        {
          backgroundColor: colors[backgroundColor],
          borderRadius: borderRadius,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
          <Text style={{ color: colors[color] }}>{title}</Text>
        </Text>

        <TouchableOpacity onPress={handlePress} style={{ marginRight: 10 }}>
          <FontAwesome name="close" size={30} color={colors.medium} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ModalTopInfor;

const styles = StyleSheet.create({});
