import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./HomeTab";
import SettingsScreen from "../screens/Settings";

export type HomeStackParamList = {
  Tabs: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Tabs"} component={HomeTab} />
      <Stack.Screen
        name={"Settings"}
        component={SettingsScreen}
        options={{ headerShown: true, headerTitle: "MovieMatcher" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
