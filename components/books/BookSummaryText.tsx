import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import { IBookDetails } from "../../utils/api/constants";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "../../styles/theme";

interface BookSummaryTextProps {
  bookDetails: IBookDetails | undefined;
}
const BookSummaryText = ({ bookDetails }: BookSummaryTextProps) => {
  return (
    <>
      {!bookDetails ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <Image source={{ uri: bookDetails?.cover }} style={styles.image} />
            <Text style={styles.title}>{bookDetails?.name}</Text>
            <View style={styles.authorsContainer}>
              {bookDetails?.authors.map((author, i) => (
                <>
                  <Text style={styles.author} key={`${i}author`}>
                    {author}
                  </Text>
                </>
              ))}
            </View>
            <Text style={styles.summary}>{bookDetails?.synopsis}</Text>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default BookSummaryText;
const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: "700",
    textAlign: "center",
    width: "90%",
  },
  author: {
    fontSize: theme.fontSize.l,
    marginRight: theme.spacing.m,
  },
  authorsContainer: {
    flexDirection: "row",
  },
  summary: {
    fontSize: theme.fontSize.m,
    width: "90%",
    textAlign: "justify",
    lineHeight: 24,
    marginTop: theme.spacing.l,
  },
  image: {
    width: 250,
    height: 350,
  },
  container: { flex: 1, alignItems: "center" },
});
