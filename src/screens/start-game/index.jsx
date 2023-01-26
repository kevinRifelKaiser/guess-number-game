import { View, Text, TextInput, Button } from 'react-native'
import { styles } from './styles'
import { Card } from '../../components'
import { colors } from '../../constants'

const StartGame = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Start the game</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Choose a number</Text>
        <TextInput keyboardType='numeric' style={styles.input} placeholder='0'/>
        <View style={styles.buttonContainer}>
          <Button title='Reset' onPress={() => null} color={colors.secondary} />
          <Button title='Confirm' onPress={() => null} color={colors.secondary} />
        </View>
      </Card>
    </View>
  );
}

export default StartGame;