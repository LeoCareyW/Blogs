import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle} />
      <Text style={styles.label}>Content</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent} />
      <Button title="Add Blog Post"/>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 6,
    marginLeft: 6
  }
})

export default CreateScreen;
