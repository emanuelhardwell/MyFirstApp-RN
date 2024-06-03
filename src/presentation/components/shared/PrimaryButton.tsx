import React, {FC} from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  lable: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton: FC<Props> = ({lable, onPress, onLongPress}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress && onPress}
      onLongPress={onLongPress && onLongPress}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '500',
          color: Platform.OS === 'android' ? '#ffffff' : '#7edee7',
        }}>
        {lable}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
