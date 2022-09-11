import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Result from "./Result";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [message, setMessage] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / height ** 2).toFixed(2));
  }

  function validation() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessage("Seu IMC é igual: ");
      setTextButton("Calcular novamente");
      return;
    }

    setImc(null);
    setTextButton("Calcular");
    setMessage("Preencha o peso e altura");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.74"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 73.35"
          keyboardType="numeric"
        />
        <Button onPress={() => validation()} title={textButton} />
      </View>
      <Result result={imc} messageResult={message} />
    </View>
  );
}
