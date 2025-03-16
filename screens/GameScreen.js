import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import Colors from "../style/Colors";
import Button from "../components/Button";

const GameScreen = () => {
  const [number, setNumber] = useState(null);

  const changeNumber = (incomingNumber) => {
    setNumber(incomingNumber);
    console.log(number);
  };

  return (
    <View style={styles.container}>
      <Title>Guess The Number</Title>
      <TextInput
        style={styles.textInput}
        keyboardType="number-pad"
        placeholder="Number"
        value={number}
        onChangeText={changeNumber}
        maxLength={2}
      />
      <Text>1# 15</Text>
      <Text>1# 19</Text>
      <Text>1# 7</Text>
      <Text>1# 3</Text>
      <Text>1# 8</Text>
      <View style={styles.buttonsContainer}>
        <Button>Enter</Button>
        <Button>Clear</Button>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    borderWidth: 2,
    borderColor: "red",
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.appColorBlack,
    width: 100,
    textAlign: "center",
    marginHorizontal: "auto",
    fontSize: 24,
    marginTop: 12,
  },
  buttonsContainer: {
    borderWidth: 2,
    borderColor: "green",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingTop: 8,
  },
});
