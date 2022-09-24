import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const VotaCidade = () => {
  const [qxd, setQxd] = useState(0);
  const [qxb, setQxb] = useState(0);
  const [jbe, setJbe] = useState(0);
  const [result, setResult] = useState("");
  const [textButtonResult, setTextButtonResult] = useState("Resultado");

  const qxdAumentar = () => {
    setQxd(qxd + 1);
  };

  const qxbAumentar = () => {
    setQxb(qxb + 1);
  };

  const jbeAumentar = () => {
    setJbe(jbe + 1);
  };

  const funResult = () => {
    if (textButtonResult === "Resultado") {
      setTextButtonResult("Zerar");
      if (qxd == qxb && qxb == jbe) {
        setResult("Empate triplo!!");
      } else if (qxd > qxb && qxd == jbe) {
        setResult("Quixadá empatou com Jaguaribe na liderança!!");
      } else if (qxd > qxb && qxd > jbe) {
        setResult("Quixadá Venceu!!");
      } else if (qxb > jbe) {
        setResult("Quixeramobim Venceu!!");
      } else if (qxb < jbe) {
        setResult("Jaguaribe Venceu!!");
      } else {
        setResult("Quixeramobim empatou com Jaguaribe na liderança!!");
      }
    } else {
      setTextButtonResult("Resultado");
      setResult("");
      setQxd(0);
      setQxb(0);
      setJbe(0);
    }
  };

  return (
    <View>
      <View style={styles.cities}>
        <Text style={styles.cityText}>Quixadá: {qxd}</Text>
        <Text style={styles.cityText}>Quixeramobim: {qxb}</Text>
        <Text style={styles.cityText}>Jaguaribe: {jbe}</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.buttonView}>
          <Button title="Quixadá" onPress={qxdAumentar} />
        </View>
        <View style={styles.buttonView}>
          <Button title="Quixeramobim" onPress={qxbAumentar} color="#6f30a2" />
        </View>
        <View style={styles.buttonView}>
          <Button title="Jaguaribe" onPress={jbeAumentar} color="#6f30a2" />
        </View>
      </View>

      <View style={styles.winner}>
        <View>
          <Text style={styles.winnerText}>{result}</Text>
        </View>
        <View>
          <Button title={textButtonResult} onPress={funResult} color="red" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cities: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "rgba(255, 255, 255  , 0.5)",
  },
  cityText: {
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 5,
  },
  winner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  winnerText: {
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
  },
  buttonView: {
    margin: 5,
  },
});

export default VotaCidade;
