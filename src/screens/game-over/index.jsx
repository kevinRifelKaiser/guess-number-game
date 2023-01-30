import { View, Text } from 'react-native'
import { styles } from './styles';

const GameOver = ({roundsTaken}) => {
  return(
    <View style={styles.container}>
      <Text>Rouns taken:</Text>
      <Text>{roundsTaken}</Text>
    </View>
  );
}

export default GameOver;