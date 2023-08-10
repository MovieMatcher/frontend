import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import MatcherTab from "../screens/Matcher";
import FavoritesTab from "../screens/Favorites";
import FriendsTab from "../screens/Friends";
import SettingsIcon from "../components/SettingsIcon";

export type HomeTabParamList = {
  Matcher: undefined;
  Favorites: undefined;
  Friends: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTab = () => (
  <Tab.Navigator
    screenOptions={{
      headerTitle: "MovieMatcher",
      headerRight: () => <SettingsIcon />,
    }}
  >
    <Tab.Screen
      name="Matcher"
      component={MatcherTab}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name={"movie-open"}
            size={size}
            color={color}
          />
        ),
        tabBarLabel: "Matcher",
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesTab}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name={"heart"} size={size} color={color} />
        ),
        tabBarLabel: "Favorites",
      }}
    />
    <Tab.Screen
      name="Friends"
      component={FriendsTab}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name={"users"} size={size} color={color} />
        ),
        tabBarLabel: "Friends",
      }}
    />
  </Tab.Navigator>
);

export default HomeTab;
