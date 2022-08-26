import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../config/colors";
var { width } = Dimensions.get("window");
function HomeCard({ icon, title, onPress }) {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={{ alignItems: "center" }}>
        <MaterialCommunityIcons
          name={icon}
          size={100}
          color={colors.primary}
          //   style={styles.icon}
        />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default HomeCard;

const styles = StyleSheet.create({
  box: {
    height: 150,
    width: (width * 3) / 3.5,
    backgroundColor: colors.light,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
