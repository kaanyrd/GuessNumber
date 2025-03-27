import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Colors from "../style/Colors";
import Button from "../components/Button";
import ErrorModal from "../modals/ErrorModal";

const GameScreen = ({
  setPickedNumbers,
  pickedNumbers,
  setGameMode,
  rolledNumber,
  setGameStatus,
}) => {
  const [number, setNumber] = useState("");
  const [errorModal, setErrorModal] = useState(false);

  const inputChangeHandler = (inputValue) => {
    setNumber(inputValue);
  };

  const onClickHandler = () => {
    if (number > 20 || number < 1 || isNaN(number)) {
      setErrorModal(true);
      setNumber("");
    } else {
      if (number === rolledNumber) {
        setGameStatus(true);
        setGameMode("GameCompleted");
      } else {
        setPickedNumbers((prevState) => [
          ...prevState,
          { id: Math.random().toString(), pickedNumber: number },
        ]);
        setNumber("");
      }
    }
  };

  const clearInputHandler = () => {
    setNumber("");
  };

  useEffect(() => {
    setGameStatus(false);
    if (pickedNumbers.length >= 5 && rolledNumber !== number) {
      setGameMode("GameCompleted");
    }
  }, [pickedNumbers]);

  return (
    <View style={styles.container}>
      <Title>Guess The Number</Title>
      <TextInput
        style={styles.textInput}
        keyboardType="number-pad"
        placeholder="?"
        value={number}
        onChangeText={inputChangeHandler}
        maxLength={2}
      />
      {errorModal && (
        <ErrorModal setErrorModal={setErrorModal}>
          You have to enter an "Valid Number"
        </ErrorModal>
      )}
      <Text style={styles.infoText}>Guess a number between 0 and 20</Text>
      {pickedNumbers.length > 0 && (
        <View style={styles.pickedNumbersContainer}>
          <FlatList
            data={pickedNumbers}
            numColumns={5}
            keyExtractor={(item) => item.id}
            renderItem={(data) => (
              <Text style={{ marginLeft: 18 }}>
                <Text style={{ fontWeight: "bold" }}>{data.index + 1}-</Text>{" "}
                {data.item.pickedNumber}
              </Text>
            )}
          />
        </View>
      )}
      <View style={styles.buttonsContainer}>
        <Button pressed={onClickHandler}>Enter</Button>
        <Button pressed={clearInputHandler}>Clear</Button>
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
  infoText: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 8,
  },
  pickedNumbersContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
});
