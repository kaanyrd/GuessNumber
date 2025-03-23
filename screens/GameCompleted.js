import { Alert, StyleSheet, Text, View, BackHandler } from "react-native";
import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../style/Colors";
import MarkedText from "../components/MarkedText";
import { Ionicons, Entypo } from "@expo/vector-icons";

const GameCompleted = ({ setGameMode, setPickedNumbers, gameStatus }) => {
  const newGameHandler = () => {
    setPickedNumbers([]);
    setGameMode("GameStart");
  };

  const ExitButton = () => {
    Alert.alert("Çıkış Yap", "Uygulamadan çıkmak istediğinize emin misiniz?", [
      { text: "Hayır", style: "cancel" },
      { text: "Evet", onPress: () => BackHandler.exitApp() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Title>Game Completed</Title>
      <View style={styles.gameSummary}>
        {gameStatus ? (
          <MarkedText>
            You Win <Ionicons name="happy-outline" size={24} color="black" />
          </MarkedText>
        ) : (
          <MarkedText>
            You Lost <Entypo name="emoji-sad" size={24} color="black" />
          </MarkedText>
        )}
      </View>
      {/* <Text>Your Point is: 70</Text>
      <Text>
        Leader Board: 1- 500 point (2 mins ago) 2- 500 point (2 mins ago) 3- 500
        point (2 mins ago) 4- 500 point (2 mins ago) 5- 500 point (2 mins ago)
      </Text> */}
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
