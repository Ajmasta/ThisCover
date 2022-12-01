import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../styles/theme";

interface IErrorMessageProps {
  err: string;
}
const ErrorMessage = ({ err }: IErrorMessageProps) => {
  return (
    <>
      {err ? (
        <View style={styles.errorContainer}>
          <Text style={{ color: "white" }}>{err}</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  errorContainer: {
    position: "absolute",
    bottom: 60,
    backgroundColor: theme.color.black,
    padding: theme.spacing.m,
    borderWidth: 2,
    borderColor: theme.color.red,
    borderRadius: theme.spacing.m,
    alignSelf: "center",
  },
});
