import React from "react";
import { Text, View, Button } from "react-native";

const Profile = (props) => (
  <View>
    <Text>Profile</Text>
    <View>
      <Button title="Home" onPress={() => props.navigation.navigate("Home")} />
    </View>
  </View>
);

export default Profile;
