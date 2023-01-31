import { View, Text, Image, Button } from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import { colors } from "../../constants";

const GameOver = ({ roundsTaken, userNumber, onHandleReset }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Image
          source={{
            uri: "https://www.pngplay.com/wp-content/uploads/6/Black-Game-Over-PNG.png",
          }}
          style={styles.image}
        />
        <Text style={styles.numberText}>Your Number: {userNumber}</Text>
        <Text style={styles.roundsNumber}>Rouns taken: {roundsTaken}</Text>
      </Card>
      <Button
        title="Restart"
        onPress={onHandleReset}
        color={colors.secondary}
      />
    </View>
  );
};

export default GameOver;
