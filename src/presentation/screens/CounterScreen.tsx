import React, {useState} from 'react';
import {
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {counter} </Text>
      {/* el componnt Button NO SE DB USAR */}
      {/* <Button
        title="+1"
        onPress={() => {
          setCounter(counter + 1);
        }}
      /> */}
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '500',
            color: Platform.OS === 'android' ? '#ffffff' : '#7edee7',
          }}>
          +1{' '}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'red',
    padding: 20,
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#50575d' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#667785' : 'white',
  },
});
