import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    paddingBottom: 50,
    width: 300,
    height: 300,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
