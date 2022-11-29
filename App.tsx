import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GenresMenu from "./components/menu/GenresMenu";
import ChooseGenreScreen from "./screens/ChooseGenreScreen";

export default function App() {
  return <ChooseGenreScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
