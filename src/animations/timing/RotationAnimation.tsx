import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import {BOX_SIZE} from '../../shared/constants';

const RotationAnimation = () => {
  const animatedRotationValue = useRef(new Animated.Value(0)).current;

  const rotationValueInterpolation = animatedRotationValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyles = {
    transform: [{rotate: rotationValueInterpolation}],
  };

  const performAnimation = (
    animationConfig: Animated.TimingAnimationConfig,
  ): Animated.CompositeAnimation => {
    return Animated.timing(animatedRotationValue, animationConfig);
  };

  const startAnimation = () => {
    performAnimation({
      toValue: 360,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      performAnimation({
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
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

export default RotationAnimation;
