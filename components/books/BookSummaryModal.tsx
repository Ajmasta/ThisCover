import {
  View,
  Text,
  Modal,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import BookSummaryText from "./BookSummaryText";
import { IBookDetails } from "../../utils/api/constants";
import { useBookDetails } from "../../hooks/useBookDetails";

interface BookSummaryProps {
  setPressed: React.Dispatch<React.SetStateAction<string>>;
  bookID: string;
}
const BookSummary = ({ setPressed, bookID }: BookSummaryProps) => {
  const { bookDetails, err } = useBookDetails(bookID);
  return (
    <Modal
      style={styles.container}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <TouchableOpacity
        onPress={() => {
          setPressed("");
        }}
        style={styles.button}
      >
        <Text>Close</Text>
      </TouchableOpacity>
      {!bookDetails ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView>
          <BookSummaryText book={bookDetails} />
        </ScrollView>
      )}
    </Modal>
  );
};

export default BookSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifySelf: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 20,
    borderWidth: 2,
    borderRadius: 5,
  },
});
