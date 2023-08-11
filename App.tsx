import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/navigation/HomeStack";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
