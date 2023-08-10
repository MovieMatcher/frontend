import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { HomeStackParamList } from "../navigation/HomeStack";

type HomeStack = NavigationProp<HomeStackParamList, "Tabs">;

const SettingsIcon = () => {
  const navigation = useNavigation<HomeStack>();

  return (
    <View style={{ marginRight: "6%" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <FontAwesome5 name="sliders-h" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default SettingsIcon;
