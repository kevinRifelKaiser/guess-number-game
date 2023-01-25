import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: "Karma-Medium",
    color: '#212121',
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  label: {
    fontSize: 15,
    color: '#2121121',
    paddingVertical: 5,
    textAlign: "center",
    fontFamily: "Karma-Regular",
  },
  input: {
    width: "100%",
    borderBottomColor: '#9DAABE',
    borderBottomWidth: 1,
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
  }
}); 