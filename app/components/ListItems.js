import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider } from "react-native-elements";
import { ListItem } from "@rneui/themed";
import colors from "../config/colors";
import AppText from "./Auth/AppText";

function ListItems({
  mainTitle,
  title,
  subTitle,
  subSubTitle,
  subSubSubTitle,
  rightContent,
  leftContent,
  subSubTitleText,
  subSubSubTitleText,
  subSubSubSubTitleText,
  subSubSubSubTitle,
  subSubSubSubSubTitle,
  subSubSubSubSubTitleText,
  subSubSubSubSubSubTitle,
  subSubSubSubSubSubTitleText,
  color,
  icon,
  titleText,
  subTitleText,
  mainTitleText,
  chevronActive = true,
  iconActive = true,
}) {
  return (
    <>
      <ListItem.Swipeable
        leftContent={leftContent}
        rightContent={rightContent}
        style={styles.container}
      >
        {iconActive && (
          <MaterialCommunityIcons name={icon} size={25} color={color} />
        )}

        <ListItem.Content>
          {mainTitle && (
            <ListItem.Title>
              <ListItem.Title style={styles.title}>
                {mainTitleText}
              </ListItem.Title>{" "}
              {mainTitle}
            </ListItem.Title>
          )}
          <View style={{ flexDirection: "row" }}>
            {title && (
              <ListItem.Subtitle>
                <ListItem.Subtitle style={styles.subTitle}>
                  {titleText}
                </ListItem.Subtitle>{" "}
                {title}{" "}
              </ListItem.Subtitle>
            )}
            {subTitle && (
              <ListItem.Subtitle>
                <ListItem.Subtitle style={styles.subTitle}>
                  {subTitleText}
                </ListItem.Subtitle>{" "}
                {subTitle}{" "}
              </ListItem.Subtitle>
            )}
            {subSubTitle && (
              <ListItem.Subtitle>
                <ListItem.Subtitle style={styles.subTitle}>
                  {subSubTitleText}
                </ListItem.Subtitle>{" "}
                {subSubTitle}{" "}
              </ListItem.Subtitle>
            )}
          </View>

          <View style={{ flexDirection: "row" }}>
            {!!subSubSubTitle && (
              <ListItem.Subtitle>
                <ListItem.Subtitle style={styles.subTitle}>
                  {subSubSubTitleText}
                </ListItem.Subtitle>{" "}
                {subSubSubTitle}{" "}
              </ListItem.Subtitle>
            )}
            {!!subSubSubSubTitle && (
              <ListItem.Subtitle>
                <ListItem.Subtitle style={styles.subTitle}>
                  {subSubSubSubTitleText}
                </ListItem.Subtitle>
                {subSubSubSubTitle}{" "}
              </ListItem.Subtitle>
            )}
            {!!subSubSubSubSubTitle && (
              <ListItem.Subtitle>
                <ListItem.Subtitle style={styles.subTitle}>
                  {subSubSubSubSubTitleText}
                </ListItem.Subtitle>{" "}
                {subSubSubSubSubTitle}{" "}
              </ListItem.Subtitle>
            )}
          </View>
          {!!subSubSubSubSubSubTitle && (
            <ListItem.Subtitle style={styles.subTitle}>
              {subSubSubSubSubSubTitle}
            </ListItem.Subtitle>
          )}
        </ListItem.Content>
        {chevronActive && <ListItem.Chevron size={35} />}
      </ListItem.Swipeable>
      {/* <Divider width={1} /> */}
    </>
  );
}

export default ListItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.primary,
  },
  history: {
    color: colors.medium,
    fontSize: 16,
  },
  subTitle: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: "bold",
  },
  subSubTitle: {
    color: colors.dark,
    fontSize: 12,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
});
