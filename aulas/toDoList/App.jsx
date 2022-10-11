import axios from "axios";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";

import { FontAwesome5 } from "react-native-vector-icons";
import uuid from "react-native-uuid";

import AddTask from "./src/component/AddTask";
import Header from "./src/component/Header";
import Tasks from "./src/component/Tasks";
import MyModal from "./src/component/Modal";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle, taskDescribe, taskTime) => {
    if (taskTitle === "") return;

    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuid.v4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
    setModalVisible(!modalVisible);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#2e8b57" barStyle="light" />
      <Header title={"Minhas tarefas"} />
      <Tasks tasks={tasks} />
      <MyModal
        child={<AddTask handleTaskAddition={handleTaskAddition} />}
        modalVisible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <View style={styles.buttonPosition}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>
            <FontAwesome5
              name="plus"
              size={20}
              color="white"
              solid
              style={styles.textStyle}
            />
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    paddingTop: 20,
  },
  buttonPosition: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 40,
  },
  button: {
    width: 60,
    height: 60,
    padding: 10,
    fontSize: 18,
    lineHeight: 1.33,
    borderRadius: 30,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonOpen: {
    backgroundColor: "#2e8b57",
  },
  buttonClose: {
    backgroundColor: "#2e8b57",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
});

export default App;
