import { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { Header } from "./components";
import { StartGame, Game, GameOver } from "./screens";
import { useFonts } from "expo-font";
import { colors } from "./constants";

const App = () => {
  const [loaded] = useFonts({
    MavenPro: require("../assets/fonts/MavenPro-Black.ttf"),
    "MavenPro-Bold": require("../assets/fonts/MavenPro-Bold.ttf"),
    "MavenPro-ExtraBold": require("../assets/fonts/MavenPro-ExtraBold.ttf"),
    "MavenPro-Medium": require("../assets/fonts/MavenPro-Medium.ttf"),
    "MavenPro-Regular": require("../assets/fonts/MavenPro-Regular.ttf"),
    "MavenPro-SemiBold": require("../assets/fonts/MavenPro-SemiBold.ttf"),
  });

  const [userNumber, setUserNumber] = useState(null);
  const [roundsTaken, setRoundstaken] = useState(0);

  const onHandleStart = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onHandleGameOver = (roundsNumber) => {
    setRoundstaken(roundsNumber);
  };

  const onHandleGoBack = () => {
    setUserNumber(null);
    setRoundstaken(0);
  };

  const Screen = () => {
    if (!userNumber) {
      return <StartGame onHandleStart={onHandleStart} />;
    }

    if (userNumber && roundsTaken === 0) {
      return (
        <Game
          userNumber={userNumber}
          onHandleGameOver={onHandleGameOver}
          onHandleGoBack={onHandleGoBack}
        />
      );
    }

    return (
      <GameOver
        roundsTaken={roundsTaken}
        userNumber={userNumber}
        onHandleReset={onHandleGoBack}
      />
    );
  };

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      <Screen />
    </View>
  );
};

export default App;
