import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Questao01 from "./src/Components/Questao01";
import Questao01A from "./src/Components/Questao01/Questao01A";
import Questao01B from "./src/Components/Questao01/Questao01B";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.question}>Questao01</Text>
      <Text style={styles.author}>João Victor Aquino Correia</Text>
      <Questao01>
        <Questao01A />
        <Questao01B />
      </Questao01>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  question: {
    fontWeight: "bold",
  },
  author: {
    fontWeight: "bold",
  },
});
