import React, {useState} from 'react';
import {Text, View} from 'react-native';
// import {PrimaryButton} from '../components/shared/PrimaryButton';
import {FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={globalStyles.containerCenter}>
      <Text style={globalStyles.title}> {counter} </Text>
      <Icon name="accessibility-outline" size={25} />
      <FAB
        label="+1"
        style={globalStyles.fab}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        icon={() => <Icon name="accessibility-outline" size={25} />}
      />
    </View>
  );
};
