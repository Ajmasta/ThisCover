import { View, Text, StyleSheet } from "react-native";
import React from "react";

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
    left: 10,
  },
  discarded: {
    borderColor: "red",
    backgroundColor: "red",
    right: 10,
  },
  commonStyle: {
    color: "white",
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    position: "absolute",
    top: 10,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
