import { Text, View } from "react-native";

let disciplinas = [
  "DESENVOLVIMENTO DE SOFTWARE PARA PERSISTENCIA",
  "PROJETO DE INTERFACES PARA DISPOSITIVOS MÓVEIS",
  "PROJETO DE INTERFACES WEB",
  "PROJETO DE PESQUISA CIENTÍFICA E TECNOLÓGICA",
];

const renderDisciplina = (disciplina) => {
  return <Text>{disciplina}</Text>;
};

const Questao01B = () => {
  return (
    <View>
      <Text>Questão 01B</Text>
      {disciplinas.map((disciplina) => renderDisciplina(disciplina))}
    </View>
  );
};

export default Questao01B;
