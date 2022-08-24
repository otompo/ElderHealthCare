import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import defaultStyles from "../../config/styles";
import colors from "../../config/colors";

function AppTextInput({
  icon,
  placeholder,
  value,
  setValue,
  autoCapitalize = "none",
  keyboardType = "default",
  secureTextEntry = false,
  editable = true,
  width = "100%",
  margin,
}) {
  return (
    <View style={[styles.container, { width: width, margin: margin }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        placeholder={placeholder}
        editable={editable}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        value={value}
        autoCorrect={false}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    flexDirection: "row",
    width: "100%",
    height: 50,
    padding: 10,
    marginVertical: 12,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
});

export default AppTextInput;
