import React, {useState} from 'react';
import {Text, View} from 'react-native';
// import {PrimaryButton} from '../components/shared/PrimaryButton';
import {FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.styles';

export const CounterM3Screen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={globalStyles.containerCenter}>
      <Text style={globalStyles.title}> {counter} </Text>
      <FAB
        label="+1"
        style={globalStyles.fab}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      />
    </View>
  );
};
