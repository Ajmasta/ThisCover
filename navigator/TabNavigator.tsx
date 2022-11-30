import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CoverPickerScreen from "../screens/CoverPickerScreen";
import SavedBooksScreen from "../screens/SavedBooksScreen";
import { Entypo } from "@expo/vector-icons";
import MainScreen from "../screens/MainScreen";

export type TabStackParamList = {
  Discover: undefined;
  "Saved Books": undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Discover"
        component={MainScreen}
        options={{
          tabBarIcon: () => <Entypo name="book" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Saved Books"
        component={SavedBooksScreen}
        options={{
          tabBarIcon: () => <Entypo name="bookmark" size={24} color="black" />,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
