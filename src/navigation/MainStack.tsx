import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./HomeStack";

export type MainStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Home"} component={HomeStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
