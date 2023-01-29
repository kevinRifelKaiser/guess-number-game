import { StyleSheet, StatusBar } from "react-native"
import { colors } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 120,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});