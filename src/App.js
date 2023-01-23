import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { Header } from './components'
import { StartGame } from './screens'

const App = () => {
  return (
    <View style={styles.container}>
      <Header title='Guess the number'/>
      <StartGame />
    </View>
  );
}

export default App;
