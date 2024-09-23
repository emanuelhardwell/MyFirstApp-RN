import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hello world !! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'red',
    textAlign: 'center',
    fontSize: 40,
    padding: 20,
  },
});
