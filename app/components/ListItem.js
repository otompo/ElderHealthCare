import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./Auth/AppText";
import { Divider } from "react-native-elements";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  iconComponent,
  renderRightActions,
  renderLeftActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
      >
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {iconComponent}
            {image && <Image style={styles.image} source={{ uri: image }} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={colors.medium}
              style={{ marginTop: 30 }}
            />
          </View>
        </TouchableHighlight>
        <Divider width={1} />
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subTitle: {
    color: colors.medium,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
});
