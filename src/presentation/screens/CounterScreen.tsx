import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {PrimaryButton} from '../components/shared/PrimaryButton';
import {Button} from 'react-native-paper';

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
      {/* <PrimaryButton
        lable="incrementar"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      /> */}
      <Button
        mode="outlined"
        textColor="red"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}>
        Incrementar
      </Button>
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
});
