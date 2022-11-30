import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Genres from "../data/genres.json";
import GenresMenuElement from "../components/menu/GenresMenuElement";
interface Props {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
}
const ChooseGenreScreen = ({ setGenre }: Props) => {
  const [activeGenre, setActiveGenre] = useState<string>("");
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {Genres.map((genre, i) => (
        <TouchableOpacity
          key={`${i}genre`}
          onPress={() => {
            setGenre(genre);
            setActiveGenre(genre);
          }}
        >
          <GenresMenuElement genre={genre} activeGenre={activeGenre} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ChooseGenreScreen;
const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  title: {
    fontSize: 24,
    marginBottom: 15,
  },
});
