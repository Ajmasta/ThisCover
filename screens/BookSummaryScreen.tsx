import { Modal, StyleSheet } from "react-native";
import React from "react";
import BookSummaryText from "../components/books/BookSummaryText";
import { useBookDetails } from "../hooks/useBookDetails";
import ErrorMessage from "../components/notifications/ErrorMessage";
import BackArrow from "../components/menu/BackArrow";

interface BookSummaryProps {
  setPressed: React.Dispatch<React.SetStateAction<string>>;
  bookID: string;
}
const BookSummaryScreen = ({ setPressed, bookID }: BookSummaryProps) => {
  const { bookDetails, err } = useBookDetails(bookID);
  return (
    <Modal
      style={styles.container}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => setPressed("")}
    >
      <BackArrow setPressed={setPressed} />
      <BookSummaryText bookDetails={bookDetails} />
      <ErrorMessage err={err} />
    </Modal>
  );
};

export default BookSummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
