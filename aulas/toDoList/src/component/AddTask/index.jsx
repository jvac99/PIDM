import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";
import Button from "../Button";

const AddTask = ({ handleTaskAddition }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescribe, setTaskDescribe] = useState("");
  const [taskTime, setTaskTime] = useState();

  const handleAddTaskClick = () => {
    handleTaskAddition(taskTitle, taskDescribe, taskTime);
    setTaskTitle("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Tarefa</Text>
      <TextInput
        style={styles.input}
        value={taskTitle}
        onChangeText={setTaskTitle}
        placeholder="Título da tarefa"
        placeholderTextColor="#2e8b57"
      />
      <TextInput
        style={styles.input}
        value={taskDescribe}
        onChangeText={setTaskDescribe}
        placeholder="Descrição da tarefa"
        placeholderTextColor="#2e8b57"
      />
      <TextInput
        style={styles.input}
        value={taskTime}
        onChangeText={setTaskTime}
        placeholder="Tempo da tarefa"
        keyboardType="numeric"
        placeholderTextColor="#2e8b57"
      />
      <Button text={"Add"} onPress={handleAddTaskClick} />
    </View>
  );
};

export default AddTask;
