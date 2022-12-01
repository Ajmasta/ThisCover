import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Genres from "../../data/genres.json";
import GenresMenuElement from "./GenresMenuElement";
interface Props {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
}
const ChooseGenreContainer = ({ setGenre }: Props) => {
  const [activeGenre, setActiveGenre] = useState<string>("Fantasy");
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

export default ChooseGenreContainer;
const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
});
