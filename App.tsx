import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GenresMenu from "./components/menu/GenresMenu";
import RootNavigator from "./navigator/RootNavigator";
import ChooseGenreScreen from "./screens/ChooseGenreScreen";
import CoverPickerScreen from "./screens/CoverPickerScreen";
import SavedBooksScreen from "./screens/SavedBooksScreen";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
