import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const SIZE = 100.0;
const CIRCLE_RADIUS = SIZE * 2;
type ContextType = {
  translateX: number;
  translateY: number;
};

const PanGestureHandl = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const PanGestureEven = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance =
        Math.sqrt(translateX.value ** 2 + translateY.value ** 2) - SIZE / 2;
      if (distance < CIRCLE_RADIUS) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <View style={styles.circle}>
      <PanGestureHandler onGestureEvent={PanGestureEven}>
        <Animated.View style={[styles.squre, rStyle]} />
      </PanGestureHandler>
    </View>
  );
};
const styles = StyleSheet.create({
  squre: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0,0,250,0.5)',
    borderRadius: 20,
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 5,
    borderColor: 'rgba(0,0,250,0.5)',
  },
});
export default PanGestureHandl;
