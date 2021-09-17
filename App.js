/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {v4 as uuid} from "uuid"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Alert,
  Button,
  Pressable,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';


const App = () =>{
  const [text, onChangeText] = React.useState("");
  const [task, setTask]=React.useState([])
  const handleAdd = ()=>{
    const payload={
      title:text,
      id:uuid(),
      status:false
    }
    setTask([...task,payload])
    Alert.alert("Task Added Successfully")
  }

  return (
    <>
      <Text style={styles.title1}>Add your Tasks below</Text>
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Add task here"
      />
   <Pressable style={styles.button} onPress={handleAdd}>
      <Text style={styles.text}>Save task</Text>
    </Pressable>

      <Text style={styles.title1}>Task List:</Text>
      <ScrollView>
        {task.map(item=><SafeAreaView key={item.id}>
          <Text style={styles.title2} >{item.title}</Text>
          <Pressable style={styles.button1}>
           <Text style={styles.text}>{item.id ? "Completed":"Mark Complete"}</Text>
          </Pressable>
          <Pressable style={styles.button1}>
           <Text style={styles.text}>Delete</Text>
          </Pressable>

          </SafeAreaView>)}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 32,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  title1:{
    fontSize: 25,
    textAlign:'center',
    fontWeight:'700',
  },
  title2:{
    fontSize: 20,
    textAlign:'center',
    fontWeight:'500',
  },
});

export default App;
