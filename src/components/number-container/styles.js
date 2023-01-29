import { StyleSheet } from "react-native"
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  number: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});