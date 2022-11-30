import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ChooseGenreScreen from "./ChooseGenreScreen";
import CoverPickerScreen from "./CoverPickerScreen";

const MainScreen = () => {
  const [genre, setGenre] = useState("");

  return (
    <View style={styles.container}>
      {genre ? (
        <CoverPickerScreen genre={genre} setGenre={setGenre} />
      ) : (
        <ChooseGenreScreen setGenre={setGenre} />
      )}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
