import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from 'react-native';
import React, {useRef} from 'react';

// Opacity 0 (meaning hidden) and 1 being completely visible.
// Anything in between 0 and 1 will add transparency.

const OpacityAnimation = () => {
  const animatedOpacityValue = useRef(new Animated.Value(1)).current;

  const animatedStyles = {
    opacity: animatedOpacityValue,
  };

  const startAnimation = () => {
    Animated.timing(animatedOpacityValue, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      // Again making opacity go from 0 to 1 once previous animation has been finished
      Animated.timing(animatedOpacityValue, {
        toValue: 1,
        duration: 500,
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
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export default OpacityAnimation;
