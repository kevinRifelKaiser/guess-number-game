import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  body: {
    position: "relative",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerScroll: {
    flex: 1,
  },
  gameCard: {
    marginVertical: 10,
    height: 225,
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gameTitle: {
    fontSize: 18,
    fontFamily: "MavenPro",
    marginTop: 20,
    color: colors.text,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: "100%",
    justifyContent: "space-between",
  },
  gobackContainer: {
    position: "absolute",
    bottom: -350,
    left: 50,
  },
});
