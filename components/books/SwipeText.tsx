import { Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../styles/theme";

interface SwipeText {
  text: string;
}
const SwipeText = ({ text }: SwipeText) => {
  return (
    <>
      {text ? (
        <Text
          style={
            text === "Saved"
              ? { ...styles.saved, ...styles.commonStyle }
              : { ...styles.discarded, ...styles.commonStyle }
          }
        >
          {text}
        </Text>
      ) : (
        <></>
      )}
    </>
  );
};

export default SwipeText;

const styles = StyleSheet.create({
  saved: {
    borderColor: "#6ee3b4",
    backgroundColor: "#6ee3b4",
    left: theme.spacing.m,
  },
  discarded: {
    borderColor: "red",
    backgroundColor: "red",
    right: theme.spacing.m,
  },
  commonStyle: {
    color: "white",
    position: "absolute",
    borderWidth: 3,
    borderRadius: 5,
    padding: theme.spacing.s,
    top: theme.spacing.m,
    fontSize: theme.fontSize.l,
    justifyContent: "center",
    alignItems: "center",
  },
});
