import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import book from "../../data/bookDetailsMockData.json";
import { IBookDetails } from "../../utils/api/constants";

interface BookSummaryTextProps {
  book: IBookDetails | undefined;
}
const BookSummaryText = ({ book }: BookSummaryTextProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: book?.cover }} style={styles.image} />
      <Text style={styles.title}>{book?.name}</Text>
      <Text style={styles.author}>{book?.authors.map((author) => author)}</Text>
      <Text style={styles.summary}>{book?.synopsis}</Text>
    </View>
  );
};

export default BookSummaryText;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  author: {
    fontSize: 16,
  },
  summary: {
    fontSize: 16,
    width: "90%",
    textAlign: "justify",
    lineHeight: 24,
    marginTop: 25,
  },
  image: {
    width: 250,
    height: 350,
  },
  container: { flex: 1, alignItems: "center" },
});
