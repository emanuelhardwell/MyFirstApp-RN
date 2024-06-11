import {StyleSheet} from 'react-native';
import {View} from 'react-native';

export const Homework4Screen = () => {
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
    // flexWrap: 'wrap',
    // alignContent: 'space-evenly',
    gap: 200,
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 6,
    borderColor: 'white',
  },
  box1: {
    backgroundColor: '#6161d7',
    alignSelf: 'flex-end',
    flex: 1,
    // justifyContent: "flex-start"
  },
  box2: {
    backgroundColor: '#fa7057',
    alignSelf: 'center',
    flex: 1,
  },
  box3: {
    backgroundColor: '#61e6ac',
    alignSelf: 'flex-start',
    flex: 1,
  },
});
