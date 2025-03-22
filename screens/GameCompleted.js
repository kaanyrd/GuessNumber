import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "../style/Colors";
import MarkedText from "../components/MarkedText";
import { Ionicons, Entypo } from "@expo/vector-icons";

const GameCompleted = ({ setGameMode, gameStatus }) => {
  const startNewGame = () => {
    setGameMode("GameStart");
  };

  useEffect(() => {
    console.log("gamestatus:", gameStatus);
  }, []);

  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      <MarkedText>
        You Win <Entypo name="emoji-sad" size={24} color="black" />
      </MarkedText>
      <MarkedText>
        You Lost
        <Ionicons name="happy-outline" size={24} color="black" />
      </MarkedText>
      <Text>Your Point is: 70</Text>
      <Text>
        Leader Board: 1- 500 point (2 mins ago) 2- 500 point (2 mins ago) 3- 500
        point (2 mins ago) 4- 500 point (2 mins ago) 5- 500 point (2 mins ago)
      </Text>
      <Text>Developed by Kaan Yardımcı</Text>
      <Text>Instagram</Text>
      <Text>Twitter</Text>
      <Text>Github</Text>
      <Text>Linkedin</Text>
      <View style={styles.buttonsContainer}>
        <Button pressed={startNewGame}>Play Again</Button>
        <MaterialIcons style={styles.exitButton} name="exit-to-app" size={24} />
      </View>
    </View>
  );
};

export default GameCompleted;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "red",
    height: "100%",
    maxWidth: "90%",
    marginHorizontal: "auto",
    justifyContent: "center",
  },
  buttonsContainer: {
    borderWidth: 2,
    borderColor: "green",
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
});
