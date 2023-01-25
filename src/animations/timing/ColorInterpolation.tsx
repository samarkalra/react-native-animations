import {Animated, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import COLORS from '../../shared/colors';
import {BOX_SIZE} from '../../shared/constants';

const AbsolutePositionAnimation = () => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const boxBackgroundColorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.tomato, COLORS.violet],
  });

  // We can interpolate more than once on a same animated value
  const topViewBackgroundColorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.violet, COLORS.tomato],
  });

  const boxAnimatedStyles = {
    backgroundColor: boxBackgroundColorInterpolation,
  };

  const topViewAnimatedStyles = {
    backgroundColor: topViewBackgroundColorInterpolation,
  };

  const textAnimatedStyles = {color: topViewBackgroundColorInterpolation};

  const startAnimation = () => {
    setIsAnimationRunning(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start(() => {
        setIsAnimationRunning(false);
      });
    });
  };

  return (
    <Animated.View style={[styles.container, topViewAnimatedStyles]}>
      <TouchableWithoutFeedback
        onPress={startAnimation}
        disabled={isAnimationRunning}>
        <Animated.View style={[styles.box, boxAnimatedStyles]}>
          <Animated.Text style={textAnimatedStyles}>
            Hello Animation!
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    width: BOX_SIZE,
    height: BOX_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AbsolutePositionAnimation;
