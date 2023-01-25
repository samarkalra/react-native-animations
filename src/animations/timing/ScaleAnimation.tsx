import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import React, {useRef} from 'react';
import {BOX_SIZE} from '../../shared/constants';

const ScaleAnimation = () => {
  const animatesScaleValue = useRef(new Animated.Value(1)).current;

  const animatedStyles = {
    transform: [{scale: animatesScaleValue}],
  };

  const startAnimation = () => {
    Animated.timing(animatesScaleValue, {
      toValue: 2,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animatesScaleValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>Hello</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: 'tomato',
  },
});

export default ScaleAnimation;
