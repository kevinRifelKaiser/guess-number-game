import { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'
import { Card, NumberContainer } from '../../components'
import { colors } from '../../constants'

const Game = ({ userNumber }) => {

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

  return(
    <View style={styles.container}>
      <Card style={styles.gameCard}>
        <Text style={styles.gameTitle}>You have to find your number</Text>
        <NumberContainer style={styles.numberContainer} number={currentGuess}/>
        <View style={styles.buttonsContainer}>
          <Button title='Decrease' onPress={() => null} color={colors.primary}/>
          <Button title='Increase' onPress={() => null} color={colors.primary}/>
        </View>
        </Card>
    </View>
  );
}

export default Game;