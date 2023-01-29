import { StyleSheet } from "react-native"
import { colors } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center',
  },
  gameCard: {
    marginTop: 20,
    height: 225,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  gameTitle: {
    fontSize: 18,
    marginTop: 20,
    color: colors.text,
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: '100%',
    justifyContent: 'space-between',
  }
}); 