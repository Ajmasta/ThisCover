import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import GenresMenu from "../components/menu/GenresMenu";
import genres from "../data/genres.json";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getPopularBooks, IBookSummary } from "../api/constants";
import { REACT_APP_API_KEY } from "@env";

const ChooseGenreScreen = () => {
  const [books, setBooks] = useState<IBookSummary[]>();
  useEffect(() => {
    const getBooks = async () => {
      setBooks(await getPopularBooks());
    };
    getBooks();
  }, []);
  console.log(books);
  return (
    <GestureHandlerRootView style={styles.container}>
      <GenresMenu genres={genres} />
    </GestureHandlerRootView>
  );
};

export default ChooseGenreScreen;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", flex: 1 },
});
