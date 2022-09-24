import { useState } from "react";
import { View, Button, Image, StyleSheet } from "react-native";

const AraGod = () => {
  const [araGod, setAraGod] = useState(false);

  const araGodIs = () => {
    setAraGod(!araGod);
  };

  const mostrarAraGod = () => {
    if (araGod) {
      return (
        <Image
          source={{
            uri: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Aragão-240x320.png",
            width: 240,
            height: 320,
          }}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Button title="AraGod" onPress={araGodIs} color="#6f30a2" />
      {mostrarAraGod()}
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

export default AraGod;
