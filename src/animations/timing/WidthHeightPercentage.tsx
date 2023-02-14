import React, {useRef} from 'react';
import {Animated} from 'react-native';
import AnimatedBox from '../../components/AnimatedBox';

const WidthHeightPercentage = () => {
  const widthHeightPercentageAnimatedValue = useRef(
    new Animated.Value(0),
  ).current;

  const widthInterpolation = widthHeightPercentageAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '50%'],
  });

  const heightInterpolation = widthHeightPercentageAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '30%'],
  });

  const animatedStyles = {
    width: widthInterpolation,
    height: heightInterpolation,
  };

  const startAnimation = () => {
    Animated.timing(widthHeightPercentageAnimatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(widthHeightPercentageAnimatedValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <AnimatedBox animatedStyles={animatedStyles} onPress={startAnimation} />
  );
};

export default WidthHeightPercentage;
