import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import Entypo from "@expo/vector-icons/Entypo";

const GameStartScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Guess Number</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageSelf}
          source={require("../assets/QuestionMark.png")}
        />
      </View>
      <Text style={styles.gameInfo}>
        Guess the secret number within 5 attempts! Each wrong guess decreases
        your chances as the game counts down from 5 to 0. If you guess
        correctly, you win and earn points based on your remaining attempts. But
        if you run out of attempts, you lose the game. Stay focused, make smart
        guesses, and try to win!
      </Text>
      <View style={styles.buttonsContainer}>
        <Button>Start Game</Button>
        <Entypo
          style={styles.icon}
          name="info"
          size={24}
          color="white"
          backgroundColor="#3b5998"
        />
      </View>
    </View>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "90%",
    marginHorizontal: "auto",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    alignItems: "center",
  },
  imageSelf: {
    width: "40%",
    height: "100%",
    objectFit: "contain",
  },
  gameInfo: {
    fontFamily: "open-sans-2",
    paddingVertical: 5,
  },
  buttonsContainer: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    padding: 8,
    borderRadius: 2,
  },
});
