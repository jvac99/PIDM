import { SafeAreaView, StyleSheet } from "react-native";

import CadastrarEstudante from "./components/CadastrarEstudante";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CadastrarEstudante />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
