import { StyleSheet, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import BookSummaryScreen from "./BookSummaryScreen";
import CoverPickerAnimation from "../components/books/CoverPickerAnimation";

import { useBookSummaries } from "../hooks/useBookSummaries";
import ErrorMessage from "../components/notifications/ErrorMessage";
interface CoverPickerProps {
  genre: string;
}
const CoverPickerScreen = ({ genre }: CoverPickerProps) => {
  const { books, loading, err } = useBookSummaries(genre);
  const [pressed, setPressed] = useState<string>("");

  return (
    <>
      {!books || loading ? (
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
      <ErrorMessage err={err} />
      {pressed && (
        <BookSummaryScreen setPressed={setPressed} bookID={pressed} />
      )}
    </>
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
});
