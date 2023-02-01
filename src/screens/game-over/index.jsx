import { useState, useEffect } from "react";
import { View, Text, Image, Button, Dimensions } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import { colors } from "../../constants";

const GameOver = ({ roundsTaken, userNumber, onHandleReset }) => {
  const [isPortrait, setIsPortrait] = useState(false);

  const onHandlePortrait = () => {
    return Dimensions.get("screen").height >= Dimensions.get("screen").width;
  };

  const stateOfPortrait = () => {
    setIsPortrait(onHandlePortrait);
  };

  useEffect(() => {
    const handlePortraitChange = Dimensions.addEventListener(
      "change",
      stateOfPortrait
    );

    return () => {
      handlePortraitChange.remove();
    };
  });

  return (
    <View style={styles.container}>
      <Card
        style={
          isPortrait
            ? styles.cardContainerPortrait
            : styles.cardContainerLandscape
        }>
        <Image
          source={{
            uri: "https://www.pngplay.com/wp-content/uploads/6/Black-Game-Over-PNG.png",
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.numberText}>Your Number: {userNumber}</Text>
          <Text style={styles.roundsNumber}>Rouns taken: {roundsTaken}</Text>
          <Button
            title="Restart"
            onPress={onHandleReset}
            color={colors.secondary}
          />
        </View>
      </Card>
    </View>
  );
};

export default GameOver;
