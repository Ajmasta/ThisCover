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
import { AntDesign } from "@expo/vector-icons";
import ErrorMessage from "../notifications/ErrorMessage";

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
      onRequestClose={() => setPressed("")}
    >
      <TouchableOpacity
        onPress={() => {
          setPressed("");
        }}
        style={styles.button}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      {!bookDetails ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView>
          <BookSummaryText book={bookDetails} />
        </ScrollView>
      )}
      <ErrorMessage err={err} />
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
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
  },
});
