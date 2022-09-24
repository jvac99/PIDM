import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const acaoAumentar = () => {
    setContador(contador + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Contador: {contador}</Text>
      <Button title="Aumentar" onPress={acaoAumentar} color="#6f30a2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});

export default Contador;
