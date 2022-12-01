import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { theme } from "../../styles/theme";

interface Book {
  imageUrl: string;
  setPressed: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}

const BookCover = ({ imageUrl, setPressed, id }: Book) => {
  return (
    <TouchableWithoutFeedback onPress={() => setPressed(id)}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BookCover;
const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 300,
    borderRadius: theme.spacing.m,
    elevation: 5,
  },
  image: { height: 400, width: 300, borderRadius: 10 },
});
