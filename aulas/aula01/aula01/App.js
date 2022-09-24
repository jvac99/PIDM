import { SafeAreaView, StyleSheet } from "react-native";

import BotaoPegaTexto from "./components/BotaoPegaTexto";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BotaoPegaTexto />
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
