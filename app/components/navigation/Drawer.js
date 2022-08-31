import React, { useContext, useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../../context/authContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../../screens/Dashboard";
// import Settings from "../../screens/Settings";
import Profile from "../../screens/Profile";
import colors from "../../config/colors";
import DrawerItems from "../../Layout/DrawerItems";
import ManagePatients from "../../screens/ManagePatients";
import MyAsignedPatient from "../../screens/MyAsignedPatient";

const Drawer = createDrawerNavigator();

function DrawRoot() {
  const [auth, setAuth] = useContext(AuthContext);
  const [role, setRole] = useState("");

  useEffect(() => {
    if (auth.user) {
      const { role } = auth.user;
      setRole(role);
    }
  }, [auth]);

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
          // marginVertical: 2,
        },
      }}
      drawerContent={(props) => <DrawerItems {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="speedometer"
              size={25}
              style={{ marginBottom: 3, alignSelf: "center" }}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Manage Patients"
        component={ManagePatients}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-injury"
              size={25}
              style={{ marginBottom: 3, alignSelf: "center" }}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="My Asigned Patients"
        component={MyAsignedPatient}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="connection"
              size={25}
              style={{ marginBottom: 3, alignSelf: "center" }}
              color={color}
            />
          ),
        }}
      />
      {/* {role.includes("admin") ? (
        <>
          <Drawer.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="speedometer"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Manage Categories"
            component={ManageCategories}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="domain"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Manage Products"
            component={ManageProducts}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="dolly"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Purchase Products"
            component={ManagePurchase}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="cart-arrow-down"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Manage Daily Sales"
            component={ManageDailySales}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="salesforce"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Manage User Daily Sales"
            component={ManageUserDailySales}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-search-outline"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Manage Reports"
            component={ManageReports}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="chart-pie"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Manage Statistics"
            component={ManageStatistics}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="chart-areaspline"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Manage Expenses"
            component={ManageExpenses}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="home-export-outline"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Manage Staff"
            component={ManageStaff}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-group"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Manage Trash Staff"
            component={ManageTrashStaff}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="delete-empty"
                  // name="account-lock"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="cog"
                  size={25}
                  style={{ marginBottom: 3, alignSelf: "center" }}
                  color={color}
                />
              ),
            }}
          />
        </>
      ) : null} */}

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              size={25}
              style={{ marginBottom: 3, alignSelf: "center" }}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawRoot;
