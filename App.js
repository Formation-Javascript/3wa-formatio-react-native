// rnfs
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textEntered, setTextEntered] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = function () {
    if (textEntered) {
      setTasks([...tasks, textEntered]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTextEntered(text)}
          autoFocus
          autoCorrect
          value={textEntered}
          /*
          Pour avoir un textarea
          multiline
          numberOfLines={4}
        */
        />
        <Button color={'#FFBD59'} title="Add task..." onPress={addTask} />
      </View>

      {/* List of tasks */}
      <View style={styles.tasksContainer}>
        {tasks.map((item, index) => (
          <View style={styles.task} key={index}>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31356E',
    paddingTop: 35,
    paddingHorizontal: 30,
  },
  inputContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  input: {
    width: '70%',
    borderWidth: 2,
    borderColor: '#c8C8C8',
    color: 'white',
    paddingHorizontal: 10,
  },
  tasksContainer: {
    flex: 4,
    gap: 14,
  },
  task: {
    backgroundColor: '#5762B7',
    paddingVertical: 8,
    borderRadius: 4
  },
  taskText: {
    textAlign: 'center',
    color: 'white',
  },
});
