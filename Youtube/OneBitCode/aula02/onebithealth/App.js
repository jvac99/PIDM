import { SafeAreaView, StyleSheet } from "react-native";

import Title from "./src/components/Title";
import Form from "./src/components/Form";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <Form />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});

export default App;
