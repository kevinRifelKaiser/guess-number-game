import { View, Text, TextInput, Button } from 'react-native'
import { styles } from './styles'

const StartGame = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Start the game</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Choose a number</Text>
        <TextInput style={styles.input} placeholder='0'/>
      </View>
      <View style={styles.buttomContainer}>
        <Button
          style={styles.button} 
          title='Reset'
          onPress={() => null}
          color='#9DAABE'
        />
        <Button
          style={styles.button}
          title='Confirm'
          onPress={() => null}
          color='#9DAABE'
        />
      </View>
    </View>
  );
}

export default StartGame;