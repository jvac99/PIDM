import { Text, View } from "react-native";

const Result = ({ result, message, imcClass, style }) => {
  return (
    <View style={style} >
      <Text>{message}</Text>
      <Text>{result}</Text>
      <Text>{imcClass}</Text>
    </View>
  );
};

export default Result;
