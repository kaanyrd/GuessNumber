import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import Colors from "../style/Colors";

const ErrorModal = ({ children, setErrorModal }) => {
  const closeModal = () => {
    setErrorModal(false);
  };

  return (
    <View style={styles.errorModal}>
      <View style={styles.backdrop}></View>
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{children}</Text>
        <Button pressed={closeModal}>Okay !</Button>
      </View>
    </View>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  errorModal: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
  },
  errorContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    padding: 24,
    opacity: 1,
    backgroundColor: Colors.appColorLigher,
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: Colors.appColorBlack,
    opacity: 0.7,
  },
  errorText: {
    textAlign: "center",
    fontFamily: "open-sans",
    fontWeight: 800,
    fontSize: 16,
  },
});
