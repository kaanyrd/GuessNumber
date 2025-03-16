import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import Colors from "../style/Colors";
import Button from "../components/Button";
import ErrorModal from "../modals/ErrorModal";

const GameScreen = () => {
  const [number, setNumber] = useState(null);
  const [errorModal, setErrorModal] = useState(true);

  const changeNumber = (incomingNumber) => {
    setNumber(incomingNumber);
  };

  const onClick = () => {
    if (isNaN(number) || number?.length > 2 || number === null) {
      setErrorModal(true);
      setNumber(null);
    } else {
      console.log(number);
    }
  };

  const clearInput = () => {
    setNumber(null);
  };

  return (
    <View style={styles.container}>
      <Title>Guess The Number</Title>
      <TextInput
        style={styles.textInput}
        keyboardType="number-pad"
        placeholder="?"
        value={number}
        onChangeText={changeNumber}
        maxLength={2}
      />
      {errorModal && (
        <ErrorModal setErrorModal={setErrorModal}>
          You have to enter an "Valid Number"
        </ErrorModal>
      )}
      <Text>Go Lower or go higher</Text>
      <Text>1# 15</Text>
      <Text>1# 19</Text>
      <Text>1# 7</Text>
      <Text>1# 3</Text>
      <Text>1# 8</Text>
      <View style={styles.buttonsContainer}>
        <Button pressed={onClick}>Enter</Button>
        <Button pressed={clearInput}>Clear</Button>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingTop: 8,
  },
});
