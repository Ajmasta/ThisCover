import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../styles/theme";

interface Props {
  genre: string;
}
const GenresMenuElement = ({ genre }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{genre}</Text>
    </View>
  );
};

export default GenresMenuElement;
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: theme.color.primary,
    marginBottom: 15,
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
  },
});
