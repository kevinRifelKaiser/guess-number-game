import { useState, useRef, useEffect } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { styles } from './styles'
import { Card, NumberContainer } from '../../components'
import { colors } from '../../constants'

const Game = ({ userNumber, onHandleGameOver, onHandleGoBack }) => {

  const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor((Math.random() * (max - min)) + min);

    if (randomNumber === exclude) {
      return generateRandomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userNumber));

  const [roundsNumber, setRoundsNumber] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const onHandleDecrease = () => {
    if (currentGuess < userNumber || currentGuess === currentLow) {
      return(
        Alert.alert('You cant do that', 'You can not go in these direction', [{text : 'okey', style: 'cancel'}])
      );
    }
    currentHigh.current = currentGuess;
    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRoundsNumber(roundsNumber + 1);
  }

  const onHandleIncrease = () => {
    if (currentGuess > userNumber || currentGuess === currentHigh) {
      Alert.alert('You cant do that', 'You can not go in these direction', [{text : 'okey', style: 'cancel'}])
      return;
    }
    currentLow.current = currentGuess;
    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRoundsNumber(roundsNumber + 1);
  }

  useEffect(() => {
    if (currentGuess === userNumber) onHandleGameOver(roundsNumber);
  }, [currentGuess, userNumber, onHandleGameOver])

  return(
    <View style={styles.container}>
      <Card style={styles.gameCard}>
        <Text style={styles.gameTitle}>You have to find your number</Text>
        <NumberContainer style={styles.numberContainer} number={currentGuess}/>
        <View style={styles.buttonsContainer}>
          <Button title='Decrease' onPress={onHandleDecrease} color={colors.primary}/>
          <Button title='Increase' onPress={onHandleIncrease} color={colors.primary}/>
        </View>
      </Card>
      <View style={styles.gobackContainer}>
        <Button title='Go Back' color={colors.primary} onPress={onHandleGoBack}/>
      </View>
    </View>
  );
}

export default Game;