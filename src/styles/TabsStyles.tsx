import { StyleSheet } from "react-native";

const tabsStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    margin: "10%",
  },
  text: {
    fontSize: 14,
    color: "#323233",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    width: "80%",
    backgroundColor: "#333333",
    borderColor: "#000000",
    borderWidth: 0.7,
    borderRadius: 15,
    marginBottom: "15%",
  },
  buttonText: {
    color: "#fafafc",
    fontSize: 20,
    padding: 10,
  },
});
export default tabsStyles;
