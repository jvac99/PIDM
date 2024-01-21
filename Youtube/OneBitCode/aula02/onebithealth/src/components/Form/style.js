import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    width: "100%",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  formTest: {
    width: "100%",
    marginBottom: 20,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    marginBottom: 5,
  },
  formInput: {
    width: "100%",
    height: 40,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    paddingLeft: 10,
  },
  formButton: {
    width: "100%",
    height: 40,
    borderRadius: 8,
    backgroundColor: "#20B2AA",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  formButtonText: {
    color: "#fff",
    // fontSize: 18,
    fontWeight: "bold",
  },
  formResult: {
    width: "100%",
  }
});

export default styles;
