import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { Card } from '../../components'
import { colors } from '../../constants'

const StartGame = () => {

  const [inputValue, setInputValue] = useState('');

  const onHandlerChange = (text) => {
    setInputValue(text.replace(/[^0-9]/g, ''));
  }

  return(
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>Start the game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Choose a number</Text>
          <TextInput 
            value={inputValue}
            keyboardType='numeric' 
            style={styles.input} 
            placeholder='0' 
            onChangeText={onHandlerChange} 
          />
          <View style={styles.buttonContainer}>
            <Button title='Reset' onPress={() => null} color={colors.secondary} />
            <Button title='Confirm' onPress={() => null} color={colors.secondary} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default StartGame;