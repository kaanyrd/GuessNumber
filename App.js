import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Colors from "./style/Colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GameScreen from "./screens/GameScreen";
import GameStartScreen from "./screens/GameStartScreen";
import GameCompleted from "./screens/GameCompleted";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

let roll = Math.floor(Math.random() * 21).toString();

export default function App() {
  const [fontsLoaded, fontsErrored] = useFonts({
    "open-sans": require("./style/Fonts/OpenSans-VariableFont_wdth,wght.ttf"),
    "open-sans-2": require("./style/Fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
  });
  const [pickedNumbers, setPickedNumbers] = useState([]);
  const [rolledNumber, setRolledNumber] = useState(roll);
  const [gameStatus, setGameStatus] = useState(false);
  const [gameMode, setGameMode] = useState("GameStart");

  useEffect(() => {
    if (gameMode === "GameStart") {
      setPickedNumbers([]);
      // setRolledNumber(number);
      setGameStatus(false);
      console.log("GameStatus", gameStatus, "rolledNumber:", rolledNumber);
    }
  }, [setPickedNumbers, setGameMode, gameMode, setRolledNumber]);

  // fontsLoaded, fontsErrored kullanılacak

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar style="auto" />
          {gameMode === "GameStart" && (
            <GameStartScreen setGameMode={setGameMode} />
          )}
          {gameMode === "GameScreen" && (
            <GameScreen
              rolledNumber={rolledNumber}
              setPickedNumbers={setPickedNumbers}
              pickedNumbers={pickedNumbers}
              setGameStatus={setGameStatus}
              gameStatus={gameStatus}
              setGameMode={setGameMode}
            />
          )}
          {gameMode === "GameCompleted" && (
            <GameCompleted setGameMode={setGameMode} gameStatus={gameStatus} />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appColor,
  },
});
