import React from "react";
import { View, Image, Dimensions } from "react-native";
import colors from "../../config/colors";

function CircleLogo({
  children,
  marginTop = marginTop,
  height = 150,
  width = 150,
}) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={[
          {
            backgroundColor: "#fff",
            height: height,
            width: width,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
          },
          { marginTop: marginTop },
        ]}
      >
        {children ? (
          children
        ) : (
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 200,
              height: 200,
              borderWidth: 2,
              borderColor: colors.primary,
              marginVertical: 30,
              marginHorizontal: 30,
              borderRadius: 100,
            }}
          />
        )}
      </View>
    </View>
  );
}

export default CircleLogo;
