import { View, Text } from "react-native";

const Result = ({ result, message, imcClass }) => {
  return (
    <View>
      <Text>{message}</Text>
      <Text>{result}</Text>
      <Text>{imcClass}</Text>
    </View>
  );
};

export default Result;
