import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Genres from "../data/genres.json";
import GenresMenu from "../components/menu/GenresMenu";
import { PanGestureHandler } from "react-native-gesture-handler";
import GenresMenuElement from "../components/menu/GenresMenuElement";
interface Props {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
}
const ChooseGenreScreen = ({ setGenre }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a genre</Text>
      {Genres.map((genre, i) => (
        <TouchableOpacity key={`${i}genre`} onPress={() => setGenre(genre)}>
          <GenresMenuElement genre={genre} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChooseGenreScreen;
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {
    fontSize: 24,
    marginBottom: 15,
  },
});
