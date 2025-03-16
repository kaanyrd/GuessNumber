import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          {/* <Text>App.js</Text> */}
          <StatusBar style="auto" />
          <GameScreen />
          {/* <GameStartScreen /> */}
          {/* <GameCompleted /> */}
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
