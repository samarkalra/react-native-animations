import {View, Text, Image, StyleSheet, Animated, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import AppStyles from '../shared/styles';
import {
  REACT_ICON_SIZE,
  REACT_ICON_URL,
  REACT_NATIVE_ICON_ANIMATION_DURATION,
} from '../shared/constants';
import COLORS from '../shared/colors';

const ReactNativeIconAnimation = () => {
  const {container, centerItems} = AppStyles;
  const animatedRotationValue = useRef(new Animated.Value(0)).current;
  const animatedScaleValue = useRef(new Animated.Value(1)).current;
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);

  const rotationValueInterpolation = animatedRotationValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const animatedIconStyles = {
    transform: [
      {rotate: rotationValueInterpolation},
      {scale: animatedScaleValue},
    ],
  };

  const startRotation = () => {
    setIsAnimationRunning(true);
    Animated.parallel([
      Animated.timing(animatedRotationValue, {
        toValue: 180,
        duration: REACT_NATIVE_ICON_ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedScaleValue, {
        toValue: 0.9,
        duration: REACT_NATIVE_ICON_ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(animatedRotationValue, {
          toValue: 0,
          duration: REACT_NATIVE_ICON_ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(animatedScaleValue, {
          toValue: 1,
          duration: REACT_NATIVE_ICON_ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIsAnimationRunning(false);
      });
    });
  };

  const textColor = isAnimationRunning ? COLORS.cyan : COLORS.cultured;

  return (
    <View
      style={[container, centerItems, {backgroundColor: COLORS.darkGunmetal}]}>
      <Pressable
        onPress={startRotation}
        disabled={isAnimationRunning}
        style={styles.iconTextView}>
        <Animated.View style={animatedIconStyles}>
          <Image
            source={{
              uri: REACT_ICON_URL,
            }}
            style={styles.icon}
            resizeMode="contain"
          />
        </Animated.View>
        <Text style={[styles.text, {color: textColor}]}>React Native</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconTextView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {width: REACT_ICON_SIZE, height: REACT_ICON_SIZE},
  text: {
    marginLeft: 12,
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default ReactNativeIconAnimation;
