import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Task = ({ task }) => {
  return (
    <>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{task.title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Task;
