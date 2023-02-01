import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerScroll: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: "MavenPro",
    color: colors.text,
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: "center",
    width: "70%",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  label: {
    fontSize: 15,
    fontFamily: "MavenPro",
    color: colors.text,
    paddingVertical: 5,
    textAlign: "center",
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    fontFamily: "MavenPro",
    minWidth: 70,
    fontSize: 22,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  confirmed: {
    width: "70%",
    height: 200,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  confirmedTitle: {
    fontSize: 15,
    color: colors.text,
  },
});
