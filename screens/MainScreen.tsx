import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ChooseGenreScreen from "./ChooseGenreScreen";
import CoverPickerScreen from "./CoverPickerScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const MainScreen = () => {
  const [genre, setGenre] = useState("");

  return (
    <GestureHandlerRootView style={styles.container}>
      <CoverPickerScreen genre={genre} setGenre={setGenre} />
      <View style={styles.genresContainer}>
        <ChooseGenreScreen setGenre={setGenre} />
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

    paddingBottom: 10,
  },
});
