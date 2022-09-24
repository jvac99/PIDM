import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const BotaoPegaTexto = () => {
  return (
    <View style={styles.container}>
      <Text>Entrada de texto com botão</Text>
      <TextInput placeholder="Digite o texto" style={styles.input} />
      <Button title="PEGAR TEXTO" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e5e5",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default BotaoPegaTexto;
