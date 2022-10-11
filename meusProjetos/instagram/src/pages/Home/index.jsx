import React from "react";
import { Text, View, Button } from "react-native";

const Home = (props) => (
  <View>
    <Text>Home</Text>
    <View>
      <Button
        title="Profile"
        onPress={() => props.navigation.navigate("Profile")}
      />
    </View>
  </View>
);

export default Home;
