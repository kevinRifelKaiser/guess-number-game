import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cardContainerPortrait: {
    width: "70%",
    alignItems: "center",
    marginVertical: 40,
    paddingBottom: 20,
  },
  cardContainerLandscape: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  numberText: {
    fontSize: 18,
    color: colors.text,
    fontFamily: "MavenPro-ExtraBold",
    marginBottom: 10,
  },
  roundsNumber: {
    fontSize: 18,
    color: colors.text,
    fontFamily: "MavenPro-ExtraBold",
    marginBottom: 20,
  },
});
