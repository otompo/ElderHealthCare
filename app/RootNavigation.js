import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { AuthContext, AuthProvider } from "./context/authContext";
import { Image, Text, View, StatusBar } from "react-native";
import colors from "./config/colors";
import Signin from "./screens/Signin";
import Home from "./screens/Home";
import DrawRoot from "./components/navigation/Drawer";
// import { CartProvider } from "./context/cartContext";
import Signup from "./screens/Signup";
import PatientDetials from "./screens/PatientDetials";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  return (
    // <AuthProvider>
    <>
      <StatusBar backgroundColor={colors.primary} />
      <NavigationContainer>
        <ScreensNav />
      </NavigationContainer>
    </>
    // </AuthProvider>
  );
}

function Tabs(props) {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="account-group"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={focused ? "green" : "black"}
                />
                <Text style={{ color: focused ? "crimson" : "black" }}>
                  Manage Staff
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

function ScreensNav(props) {
  // const [auth, setAuth] = useContext(AuthContext);
  // const authenticated = auth && auth.token !== "" && auth.user !== null;

  return (
    <Stack.Navigator initialRouteName="Signin">
      {/* {authenticated ? (
        <> */}
      <Stack.Screen
        name="DrawRoot"
        component={DrawRoot}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
            name="ManageEditExpenses"
            component={ManageEditExpenses}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageProductsInstock"
            component={ManageProductsInstock}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpiredProducts"
            component={ManageExpiredProducts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageProductsAboutToExpire"
            component={ManageProductsAboutToExpire}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageProductOutOfStock"
            component={ManageProductOutOfStock}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageProductsAboutOutOfStock"
            component={ManageProductsAboutOutOfStock}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageCartItems"
            component={ManageCartItems}
            options={{ headerShown: false }}
          /> */}
      <Stack.Screen
        name="PatientDetials"
        component={PatientDetials}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      {/* </>
      ) : (
        <>
         
        </>
      )} */}
    </Stack.Navigator>
  );
}
