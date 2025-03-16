import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MarkedText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default MarkedText;

const styles = StyleSheet.create({
  text: {
    fontWeight: 800,
    fontSize: 20,
  },
});
