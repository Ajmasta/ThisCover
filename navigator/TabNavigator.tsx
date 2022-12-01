import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SavedBooksScreen from "../screens/SavedBooksScreen";
import { Entypo } from "@expo/vector-icons";
import MainScreen from "../screens/MainScreen";
import { theme } from "../styles/theme";

export type TabStackParamList = {
  Discover: undefined;
  "Saved Books": undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000000",

        tabBarInactiveBackgroundColor: "#ffffff",
        tabBarActiveBackgroundColor: theme.color.primary,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Discover"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <Entypo name="book" size={24} color={theme.color.secondary} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved Books"
        component={SavedBooksScreen}
        options={{
          tabBarIcon: () => (
            <Entypo name="bookmark" size={24} color={theme.color.secondary} />
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
