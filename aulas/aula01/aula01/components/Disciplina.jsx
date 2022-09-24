import { Text, View } from "react-native";

const Disciplina = ({ children, titulo }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{titulo}</Text>
    </View>
  );
};

export default Disciplina;
