import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../style/Colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontFamily: "open-sans",
    textAlign: "center",
    borderWidth: 5,
    borderColor: Colors.appColorBlack,
    padding: 5,
    borderRadius: 5,
    fontWeight: 900,
  },
});
