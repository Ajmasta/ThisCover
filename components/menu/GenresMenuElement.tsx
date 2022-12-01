import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../styles/theme";

interface Props {
  genre: string;
  activeGenre: string;
}
const GenresMenuElement = ({ genre, activeGenre }: Props) => {
  return (
    <View
      style={
        activeGenre === genre
          ? { ...styles.containerActive, ...styles.container }
          : styles.container
      }
    >
      <Text
        style={
          activeGenre === genre
            ? { ...styles.textActive, ...styles.text }
            : styles.text
        }
      >
        {genre}
      </Text>
    </View>
  );
};

export default GenresMenuElement;
const styles = StyleSheet.create({
  container: {
    marginRight: theme.spacing.m,
    marginLeft: theme.spacing.m,
    paddingTop: theme.spacing.s,
    paddingLeft: theme.spacing.s,
    paddingRight: theme.spacing.s,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.m,
    borderRadius: 4,
  },
  text: {
    fontSize: theme.fontSize.m,
  },
  containerActive: {
    borderTopWidth: 2,
    borderColor: theme.color.secondary,
  },
  textActive: { color: theme.color.secondary },
});
