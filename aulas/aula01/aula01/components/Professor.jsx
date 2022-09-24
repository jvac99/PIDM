import { Text, View } from "react-native";

import { styles } from "./Styles";

const Professor = ({ nome, titulacao, universidade }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{nome}</Text>
      <Text style={styles.item}>{titulacao}</Text>
      <Text style={styles.item}>{universidade}</Text>
    </View>
  );
};

/*
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  item: {
    margin: 10,
    fontSize: 16,
    textAlign: "center",
    textAlign: "center",
    color: "#696969",
  },
});
*/

export default Professor;
