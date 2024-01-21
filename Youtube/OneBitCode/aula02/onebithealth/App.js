import { SafeAreaView, StyleSheet } from "react-native";

import Form from "./src/components/Form";
import Title from "./src/components/Title";

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
    paddingHorizontal: 50,
  },
});

export default App;
