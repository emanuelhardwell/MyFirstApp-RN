import {StyleSheet} from 'react-native';
import {View} from 'react-native';

export const Homework1Screen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525151',
    display: 'flex',
    flexDirection: 'column',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 6,
    borderColor: 'white',
  },
  box1: {
    backgroundColor: '#6161d7',
    flex: 1,
  },
  box2: {
    backgroundColor: '#fa7057',
    flex: 6,
  },
  box3: {
    backgroundColor: '#61e6ac',
    flex: 1,
  },
});
