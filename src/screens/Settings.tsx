import React from "react";
import { Text, View } from "react-native";
import mainStyles from "../styles/MainStyles";

function SettingsScreen() {
  return (
    <View style={mainStyles.container}>
      <View style={{ margin: "10%" }}></View>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default SettingsScreen;
