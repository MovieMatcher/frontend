import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tabsStyles from "../styles/TabsStyles";
function MatcherTab() {
  return (
    <View style={tabsStyles.container}>
      <View style={tabsStyles.textContainer}>
        <Text style={tabsStyles.text}>Try Matcher functionality.</Text>
        <Text style={tabsStyles.text}>
          Seamlessly choose a movie that both you and your friends will love to
          watch together.
        </Text>
      </View>
      <TouchableOpacity style={tabsStyles.button}>
        <Text style={tabsStyles.buttonText}>Start Matching</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MatcherTab;
