import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  number: {
    fontSize: 25,
    fontFamily: "MavenPro-Bold",
  },
});
