import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../style/Colors";

const Button = ({ children }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    backgroundColor: "black",
    padding: 8,
    borderRadius: 2,
  },
  buttonText: {
    color: Colors.appColorWhite,
    fontFamily: "open-sans",
    fontWeight: "900",
  },
});
