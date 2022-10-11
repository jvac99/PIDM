import { FlatList, Text } from "react-native";
import Task from "../Task";
import { styles } from "./Styles";

const Tasks = ({ tasks }) => {
  return (
    <FlatList
      style={styles.tasks}
      data={tasks}
      renderItem={({ item }) => {
        return <Task task={item} />;
      }}
      keyExtractor={(task) => task.id}
    />
  );
};

export default Tasks;
