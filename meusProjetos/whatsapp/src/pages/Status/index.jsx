import React from "react";
import { Text, View, Button } from "react-native";

const Status = (props) => (
  <View>
    <Text>Status</Text>
    <View>
      <Button
        title="Call"
        onPress={() => props.navigation.navigate("Call")}
      />
    </View>
  </View>
);

export default Status;
