import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { IBookSummary } from "../../utils/api/constants";

interface Props {
  book: IBookSummary;
  setPressed: React.Dispatch<React.SetStateAction<string>>;
}
const BookListElement = ({ book, setPressed }: Props) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setPressed(String(book.book_id))}
      >
        <Image source={{ uri: book?.cover }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{book?.name}</Text>
          <Text style={styles.author}>{book?.author}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default BookListElement;

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 90,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textContainer: {
    alignSelf: "center",
    justifySelf: "center",
  },
  author: {
    fontSize: 12,
  },
  title: {
    fontWeight: "700",
  },
});
