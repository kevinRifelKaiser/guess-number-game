import { StyleSheet } from "react-native"
import { colors } from '../../constants'

export const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.background,
    shadowColor: colors.black,
    shadowOffset: {
    width: 0,
    height: 6,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 8,
  }
});