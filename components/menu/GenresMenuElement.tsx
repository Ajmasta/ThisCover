import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
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
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
  },
  containerActive: {
    borderTopWidth: 2,
    borderColor: theme.color.secondary,
  },
  textActive: { color: theme.color.secondary },
});
