import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../styles/theme";

interface BackArrowProps {
  setPressed: React.Dispatch<React.SetStateAction<string>>;
}
const BackArrow = ({ setPressed }: BackArrowProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setPressed("");
      }}
      style={styles.button}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackArrow;

const styles = StyleSheet.create({
  button: {
    justifySelf: "center",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.m,
    marginLeft: theme.spacing.l,
  },
});

StyleSheet;
