import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Colors from "../style/Colors";
import Button from "../components/Button";
import ErrorModal from "../modals/ErrorModal";

const GameScreen = ({
  setPickedNumbers,
  pickedNumbers,
  rolledNumber,
  setGameStatus,
  setGameMode,
}) => {
  const [number, setNumber] = useState("");
  const [errorModal, setErrorModal] = useState(null);

  const changeNumber = (incomingNumber) => {
    setNumber(incomingNumber);
  };

  useEffect(() =>
    // burayı click kısmına ekle
    {
      if (pickedNumbers.length >= 5) {
        setGameStatus(false);
        setGameMode("GameCompleted");
      } else if (number == rolledNumber) {
        setGameStatus(true);
        setGameMode("GameCompleted");
      }
    }, [pickedNumbers, number, rolledNumber]);

  const onClick = () => {
    if (
      number > 20 ||
      number < 1 ||
      (isNaN(number) && pickedNumbers.length < 5)
    ) {
      setErrorModal(true);
      setNumber("");
    } else {
      setPickedNumbers((prev) => [
        ...prev,
        { id: Math.random().toString(), pickedNumber: number },
      ]);
      setNumber("");
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
      {pickedNumbers.length === 0 && (
        <Text style={styles.infoText}>Guess a number between 0 and 20</Text>
      )}
      {pickedNumbers.length > 0 && (
        <View>
          <FlatList
            data={pickedNumbers}
            keyExtractor={(item) => item.id}
            renderItem={(data) => (
              <Text style={{ marginLeft: 4 }}>
                {data.index + 1}- {data.item.pickedNumber}
              </Text>
            )}
          />
        </View>
      )}
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
  infoText: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 8,
  },
});
