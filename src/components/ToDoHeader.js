import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/taskSlice";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import Entypo from 'react-native-vector-icons/Entypo';
import OverlappingImages from "./SvgOverlapExample"

import svgData from '../assets/Avatar.svg';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

const TodoHeader = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [checkedTasks, setCheckedTasks] = useState([]);

  const onSubmitTask = () => {
    if (task.trim().length === 0) {
      Alert.alert("You need to enter a task");
      return;
    }

    dispatch(
      addTask({
        task,
        description,
      })
    );
    setTask("");
    setDescription("");
  };

  const toggleChecked = (id) => {
    if (checkedTasks.includes(id)) {
      setCheckedTasks(checkedTasks.filter((taskId) => taskId !== id));
    } else {
      setCheckedTasks([...checkedTasks, id]);
    }
  };
  const svgXml = svgData;
 

  

  const deleteCheckedTasks = () => {
    dispatch(deleteTask({ ids: checkedTasks }));
    setCheckedTasks([]);
  };

  const renderItem = ({ item }) => {
    const isChecked = checkedTasks.includes(item.id);

    return (
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => toggleChecked(item.id)}
        >
          {isChecked ? (
            <Icon name="check-circle" size={24} color="purple" />
          ) : (
            <Icon name="circle-thin" size={24} color="gray" />
          )}
        </TouchableOpacity>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.text1}>Task Details</Text>
      <View style={styles.container}>
        <Text style={styles.label}>Task:</Text>
        {/* Task TextInput */}
        <TextInput
          style={styles.input}
          placeholder="Add task"
          onChangeText={setTask}
          value={task}
        />
        {/* Description TextInput */}
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input1}
          placeholder="Add description"
          onChangeText={setDescription}
          value={description}
          multiline={true}
        />
        

        {/* Button */}
       
      </View>
      <View style={styles.rowContainer}>
      <Text style={styles.label}>Task List</Text>
      
      {checkedTasks.length > 0 && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={deleteCheckedTasks}
        >
          <Text style={styles.deleteButtonText}>
          <Icon name="trash" size={20} color="red" />
          </Text>
        </TouchableOpacity>
      )}
      </View>
     <Text> <OverlappingImages /> {/* Add this line to include the component */}</Text>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      /><View>
      <TouchableOpacity style={styles.item} onPress={onSubmitTask}>
      <Entypo name="plus" size={20} color="gray" style={styles.icon}/>
          
          <Text style={styles.title2}>Add Task</Text>
        </TouchableOpacity>
        {/* <Text style={styles.title}>Add</Text> */}
        </View>


      
    </View>
  );
};

const styles = StyleSheet.create({
  icon:{
    paddingRight:5,
  },
  title2:{
      color:"#ABB6C8",
      fontSize: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    marginBottom: 10,
    paddingTop:0,
  },

  input: {
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    textAlign: "left",
  },
  input1: {
    paddingLeft: 20,
    width: "90%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 30,
    textAlign: "left",
    height:100,
    color:"#111322",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 124,
    color: "#111322",
  },
  label: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 20,
    color: "#5D6B98",
    flex: 0,
    flexGrow: 0,
    textAlign: "left",
    paddingLeft: 20,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    paddingLeft: 29,
    paddingRight: 16,
    backgroundColor: "#F2F2F2",
    borderRadius: 16,
    margin: 20,
    marginVertical: 8, 
    height: 72,
  },
  checkbox: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
  },
  deleteButton: {
    marginLeft: 'auto',
    paddingRight:30,
    marginTop: 20,
  },
});

export default TodoHeader;
