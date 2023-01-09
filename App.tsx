import {
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';

const BOX_SIZE = 150;

const App = () => {
  const animatedAbsolutePositionTopValue = useRef(
    new Animated.Value(0),
  ).current;
  const animatedAbsolutePositionLeftValue = useRef(
    new Animated.Value(0),
  ).current;

  const animatedStyles = {
    top: animatedAbsolutePositionTopValue,
    left: animatedAbsolutePositionLeftValue,
  };

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(animatedAbsolutePositionTopValue, {
        toValue: Dimensions.get('window').height - BOX_SIZE - 24,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(animatedAbsolutePositionLeftValue, {
        toValue: Dimensions.get('window').width - BOX_SIZE,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
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
    position: 'absolute',
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: 'tomato',
    borderWidth: 2,
    borderColor: 'blue',
  },
});

export default App;
