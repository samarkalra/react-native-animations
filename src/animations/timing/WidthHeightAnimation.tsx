import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import React, {useRef} from 'react';
import {BOX_SIZE} from '../../shared/constants';

const WidthHeightAnimation = () => {
  const animatedValue = useRef(new Animated.Value(BOX_SIZE)).current;

  const animatedStyles = {
    width: animatedValue,
    height: animatedValue,
  };

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: BOX_SIZE * 2,
      duration: 500,
      // style property 'width' and 'height' is not supported by native animated module,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box1, animatedStyles]}>
          <Text>
            This is really long text. This is really long text. This is really
            long text. This is really long text. This is really long text. This
            is really long text. This is really long text. This is really long
            text.
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <View style={styles.box2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    // width: BOX_SIZE,
    // height: BOX_SIZE,
    backgroundColor: 'tomato',
  },
  box2: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: 'blue',
  },
});

export default WidthHeightAnimation;
