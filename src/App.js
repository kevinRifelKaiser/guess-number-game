import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { Header } from './components'

const App = () => {
  return (
    <View style={styles.container}>
      <Header title='Guess the number'/>
    </View>
  );
}

export default App;
