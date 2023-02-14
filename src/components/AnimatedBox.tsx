import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  ViewProps,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {BOX_SIZE} from '../shared/constants';

type BoxProps = PropsWithChildren<
  ViewProps & {
    animatedStyles: Animated.WithAnimatedObject<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
  }
>;

const AnimatedBox: React.FC<BoxProps> = ({
  children,
  animatedStyles,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View style={[styles.box, animatedStyles]}>
          {children}
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

export default AnimatedBox;
