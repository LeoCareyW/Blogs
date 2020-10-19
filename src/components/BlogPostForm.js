import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)} />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)} />
      <Button
        onPress={() => onSubmit(title, content)}
        title="Save Blog Post"
      />
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

export default BlogPostForm
