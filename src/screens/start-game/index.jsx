import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { Card, NumberContainer } from "../../components";
import { colors } from "../../constants";

const StartGame = ({ onHandleStart }) => {
  const [inputValue, setInputValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const onHandlerChange = (text) => {
    setInputValue(text.replace(/[^0-9]/g, ""));
  };

  const onHandleReset = () => {
    setInputValue("");
    setIsConfirmed(false);
  };

  const onHandleConfirm = () => {
    const chosenNumber = parseInt(inputValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "You have to choose a number between 1 and 99",
        [{ text: "Okey", onPress: onHandleReset, style: "destructive" }]
      );
    } else {
      setIsConfirmed(true);
      setSelectedNumber(chosenNumber);
      setInputValue("");
    }
  };

  const onHandleStartGame = () => {
    onHandleStart(selectedNumber);
  };

  const Confirmed = () => {
    return isConfirmed ? (
      <Card style={styles.confirmed}>
        <Text style={styles.confirmedTitle}>Selected number:</Text>
        <NumberContainer number={selectedNumber} />
        <Button
          title="Start game"
          onPress={onHandleStartGame}
          color={colors.secondary}
        />
      </Card>
    ) : null;
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>Start the game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Choose a number</Text>
          <TextInput
            value={inputValue}
            keyboardType="numeric"
            style={styles.input}
            placeholder="0"
            onChangeText={onHandlerChange}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              onPress={onHandleReset}
              color={colors.secondary}
            />
            <Button
              title="Confirm"
              onPress={onHandleConfirm}
              color={colors.secondary}
            />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
