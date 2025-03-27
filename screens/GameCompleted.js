import { Alert, StyleSheet, Text, View, BackHandler } from "react-native";
import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../style/Colors";
import MarkedText from "../components/MarkedText";
import { Ionicons, Entypo } from "@expo/vector-icons";

const GameCompleted = ({
  setGameMode,
  setPickedNumbers,
  gameStatus,
  setRolledNumber,
}) => {
  const newGameHandler = () => {
    setPickedNumbers([]);
    setRolledNumber(Math.floor(Math.random() * 21).toString());
    setGameMode("GameStart");
  };

  const onCloseHandler = () => {
    setRolledNumber(Math.floor(Math.random() * 21).toString());
    BackHandler.exitApp();
  };

  const ExitButton = () => {
    Alert.alert("Exit", "Would you like to close game?", [
      { text: "No", style: "cancel" },
      { text: "Yes", onPress: onCloseHandler },
    ]);
  };

  return (
    <View style={styles.container}>
      <Title>Game Completed</Title>
      <View style={styles.gameSummary}>
        {gameStatus ? (
          <MarkedText>
            You Win <Ionicons name="happy-outline" size={28} color="black" />
          </MarkedText>
        ) : (
          <MarkedText>
            You Lost <Entypo name="emoji-sad" size={24} color="black" />
          </MarkedText>
        )}
      </View>
      <Text style={styles.developer}>Developed by Kaan Yardımcı</Text>
      <View style={styles.buttonsContainer}>
        <Button pressed={newGameHandler}>Play Again</Button>
        <MaterialIcons
          style={styles.exitButton}
          name="exit-to-app"
          size={24}
          onPress={ExitButton}
        />
      </View>
    </View>
  );
};

export default GameCompleted;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    maxWidth: "90%",
    marginHorizontal: "auto",
    justifyContent: "center",
  },
  buttonsContainer: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  exitButton: {
    backgroundColor: Colors.appColorRed,
    color: "white",
    padding: 8,
    borderRadius: 2,
  },
  gameSummary: {
    alignItems: "center",
    textAlign: "center",
    marginVertical: 16,
  },
  developer: {
    textAlign: "center",
    marginVertical: 16,
  },
});
