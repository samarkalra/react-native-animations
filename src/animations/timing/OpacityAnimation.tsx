import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from 'react-native';
import React, {useRef} from 'react';
import {BOX_SIZE} from '../../shared/constants';

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
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: 'tomato',
  },
});

export default OpacityAnimation;
