import {
  StyleSheet,
  ListRenderItem,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { IBookSummary } from "../utils/api/constants";
import { getData } from "../utils/storage/storage";
import BookListElement from "../components/books/BookListElement";
import { FlatList } from "react-native-gesture-handler";
import BookSummaryScreen from "./BookSummaryScreen";
const SavedBooksScreen = () => {
  const [savedBooks, setSavedBooks] = useState<IBookSummary[]>();
  const [pressed, setPressed] = useState<string>("");
  useEffect(() => {
    const getBooks = async () => {
      const books = await getData("savedBooks");
      setSavedBooks(books);
    };
    getBooks();
  }, []);

  interface Props {
    item: IBookSummary;
  }
  const BookJSX: ListRenderItem<IBookSummary> = ({ item }: Props) => (
    <BookListElement book={item} setPressed={setPressed} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={savedBooks}
        renderItem={BookJSX}
        keyExtractor={(book) => String(book.book_id)}
      />
      {pressed !== "" ? (
        <BookSummaryScreen setPressed={setPressed} bookID={pressed} />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default SavedBooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
