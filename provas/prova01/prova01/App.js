import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Questao01 from "./src/Components/Questao01";
import Questao01A from "./src/Components/Questao01/Questao01A";
import Questao01B from "./src/Components/Questao01/Questao01B";
import Questao02 from "./src/Components/Questao02";
import Questao03 from "./src/Components/Questao03";
import Questao04 from "./src/Components/Questao04";
import Questao05 from "./src/Components/Questao05";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Prova 01</Text>
      <View style={styles.container}>
        <Text style={styles.question}>Questao01</Text>
        <Questao01>
          <Questao01A />
          <Questao01B />
        </Questao01>
      </View>
      <View style={styles.container}>
        <Text style={styles.question}>Questao02</Text>
        <Questao02 />
      </View>
      <View>
        <Text style={styles.question}>Questao03</Text>
        <Questao03 />
      </View>
      <View>
        <Text style={styles.question}>Questao04</Text>
        <Questao04 />
      </View>
      <View>
        <Text style={styles.question}>Questao0</Text>
        <Questao05 />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  question: {
    fontWeight: "bold",
  },
});
