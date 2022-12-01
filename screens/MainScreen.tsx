import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import ChooseGenreContainer from "../components/menu/ChooseGenreContainer";
import CoverPickerScreen from "./CoverPickerScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { theme } from "../styles/theme";

const MainScreen = () => {
  const [genre, setGenre] = useState<string>("Fantasy");

  return (
    <GestureHandlerRootView style={styles.container}>
      <CoverPickerScreen genre={genre} />
      <View style={styles.genresContainer}>
        <ChooseGenreContainer setGenre={setGenre} />
      </View>
    </GestureHandlerRootView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", flex: 1 },
  genresContainer: {
    position: "absolute",
    bottom: 0,
    paddingBottom: theme.spacing.m,
  },
});
