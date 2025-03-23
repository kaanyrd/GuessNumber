import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Colors from "./style/Colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GameScreen from "./screens/GameScreen";
import GameStartScreen from "./screens/GameStartScreen";
import GameCompleted from "./screens/GameCompleted";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

export default function App() {
  const [fontsLoaded, fontsErrored] = useFonts({
    "open-sans": require("./style/Fonts/OpenSans-VariableFont_wdth,wght.ttf"),
    "open-sans-2": require("./style/Fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
  });
  // fontsLoaded, fontsErrored kullanılacak

  const [gameMode, setGameMode] = useState("GameStart");
  const [pickedNumbers, setPickedNumbers] = useState([]);
  const [gameStatus, setGameStatus] = useState(false);
  const [rolledNumber, setRolledNumber] = useState(
    Math.floor(Math.random() * 21).toString()
  );

  console.log("rolledNumber:", rolledNumber);

  useEffect(() => {
    setGameMode("GameStart");
  }, []);

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
              setPickedNumbers={setPickedNumbers}
              pickedNumbers={pickedNumbers}
              setGameMode={setGameMode}
              rolledNumber={rolledNumber}
              setGameStatus={setGameStatus}
            />
          )}
          {gameMode === "GameCompleted" && (
            <GameCompleted
              setGameMode={setGameMode}
              setPickedNumbers={setPickedNumbers}
              gameStatus={gameStatus}
            />
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
