import { useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Header } from './components'
import { StartGame, Game } from './screens'

const App = () => {

  const [userNumber, setUserNumber] = useState(null)
  
  const onHandleStart = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const Screen = () => {
    return(
      userNumber ?
      <Game userNumber={userNumber}/> :
      <StartGame  onHandleStart={onHandleStart}/>
    );
  }
  return (
    <View style={styles.container}>
      <Header title='Guess the number'/>
      <Screen />
    </View>
  );
}

export default App;
