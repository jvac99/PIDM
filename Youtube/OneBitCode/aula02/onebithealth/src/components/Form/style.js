import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 10,
  },
  formInput: {
    width: "90%",
    height: 40,
    margin: 12,
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
  },
  formButton: {
    width: "90%",
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: "#20B2AA",
    alignItems: "center",
    justifyContent: "center",
  },
  formButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
