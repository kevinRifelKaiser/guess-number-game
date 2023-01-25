import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    color: '#252525',
    fontWeight: 'bold',
    paddingVertical: 20
  },
  inputContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    paddingVertical: 20,
    color: '#252525',
    fontSize: 14,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    minWidth: 80,
    textAlign: 'center',
    fontSize: 25,
    borderBottomColor: "#9DAABE",
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  buttomContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: '75%',
    justifyContent: 'space-around'
  }
}); 