import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { IBookSummary } from "../utils/api/constants";
import BookSummaryModal from "../components/books/BookSummaryModal";
import CoverPickerAnimation from "../components/books/CoverPickerAnimation";
import BooksArray from "../data/booksMockData.json";
import { resetData } from "../utils/storage/storage";
import { getPopularBooks } from "../utils/api/getters";
import { theme } from "../styles/theme";
import { useBookSummaries } from "../hooks/useBookSummaries";
interface CoverPickerProps {
  genre: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
}
const CoverPickerScreen = ({ genre, setGenre }: CoverPickerProps) => {
  const { books, err } = useBookSummaries(genre);
  const [pressed, setPressed] = useState<string>("");

  return (
    <GestureHandlerRootView style={styles.container}>
      {!books ? (
        <ActivityIndicator size={"large"} />
      ) : (
        books.map((book, i) => (
          <CoverPickerAnimation
            key={`cover${i}`}
            i={i}
            book={book}
            setPressed={setPressed}
          />
        ))
      )}
      <TouchableOpacity
        style={styles.changeButton}
        onPress={() => setGenre("")}
      >
        <Text>Change Genre</Text>
      </TouchableOpacity>
      {err ? (
        <View style={styles.errorContainer}>
          <Text style={{ color: "red" }}>{err}</Text>
        </View>
      ) : (
        <></>
      )}
      {pressed !== "" ? (
        <BookSummaryModal setPressed={setPressed} bookID={pressed} />
      ) : (
        <></>
      )}
    </GestureHandlerRootView>
  );
};

export default CoverPickerScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: { width: 300, height: 400 },
  changeButton: {
    position: "absolute",
    bottom: 40,
    borderWidth: 2,
    borderColor: theme.color.primary,
    padding: 5,
    borderRadius: 10,
  },
  errorContainer: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#ffffff",
    padding: 5,
    borderWidth: 2,
    borderColor: theme.color.secondary,
    borderRadius: 10,
  },
});
