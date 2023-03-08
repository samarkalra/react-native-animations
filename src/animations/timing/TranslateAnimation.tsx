import {
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React, {useRef} from 'react';
import {BOX_SIZE} from '../../shared/constants';

const TranslateAnimation = () => {
  const animatedTranslateValue = useRef(new Animated.Value(0)).current;

  const animatedStyles = {
    transform: [
      {
        translateY: animatedTranslateValue,
      },
    ],
  };

  const startAnimation = () => {
    Animated.timing(animatedTranslateValue, {
      toValue: 200,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      animatedTranslateValue.setValue(0);
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

export default TranslateAnimation;
