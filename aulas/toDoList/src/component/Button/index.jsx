import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
