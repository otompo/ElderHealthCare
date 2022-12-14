import { useContext, useEffect, useState } from "react";
import { StyleSheet, LogBox, View, StatusBar } from "react-native";
// import colors from "./app/config/colors";
import RootNavigation from "./app/RootNavigation";
import * as SplashScreen from "expo-splash-screen";

LogBox.ignoreAllLogs(true);

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return <RootNavigation />;
}
