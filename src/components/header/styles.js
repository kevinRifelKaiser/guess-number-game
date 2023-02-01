import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { colors } from "../../constants";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: height * 0.12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 22,
    fontFamily: "MavenPro-Bold",
  },
});
