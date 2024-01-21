import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Result from "./Result";
import styles from "./style";

const Form = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [message, setMessage] = useState("Preencha o peso e altura");
  const [imcClass, setImcClass] = useState(null);
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  const calculator = () => {
    let imc = (weight / height ** 2).toFixed(2);
    setImc(imc);
    if (imc < 16.5) setImcClass("Peso severamente abaixo do normal");
    else if (imc < 18.5) setImcClass("Peso abaixo do normal");
    else if (imc < 24.99) setImcClass("Normal");
    else if (imc < 34.99) setImcClass("Pré-obeso");
    else if (imc < 16.5) setImcClass("Obesidade classe I");
    else if (imc < 39.99) setImcClass("Obesidade classe II");
    else if (imc > 40) setImcClass("Obesidade classe III");
  };

  const validation = () => {
    if (weight != null && height != null) {
      calculator();
      setHeight(null);
      setWeight(null);
      setMessage("Seu IMC é igual: ");
      setTextButton("Calcular novamente");
      return;
    }

    setImc(null);
    setImcClass(null);
    setTextButton("Calcular");
    setMessage("Preencha o peso e altura");
  };

  return (

    <View style={styles.form}>
      <View style={styles.formTest}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.74"
          keyboardType="numeric"
          style={styles.formInput}
        />
      </View>
      <View style={styles.formTest}>
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 73.35"
          keyboardType="numeric"
          style={styles.formInput}
        />
      </View>
      <TouchableOpacity onPress={validation} style={styles.formButton}>
        <Text style={styles.formButtonText}>{textButton}</Text>
      </TouchableOpacity>
      <Result result={imc} message={message} imcClass={imcClass} style={styles.formResult} />
    </View>

  );
};

export default Form;
