import React from "react";
import { View, Text } from "react-native";

export default function Result({ result, messageResult }) {
  return (
    <View>
      <Text>{messageResult}</Text>
      <Text>{result}</Text>
    </View>
  );
}
