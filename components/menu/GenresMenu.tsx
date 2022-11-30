import { View, Text, StyleSheet } from "react-native";
import React from "react";
import genres from "../../data/genres.json";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface IGenres {
  genres: string[];
}
type ContextType = {
  translateX: number;
  translateY: number;
};

const GenresMenu = ({ genres }: IGenres) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
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
      const distance = translateX.value;
      if (distance < 20) {
        translateX.value = withSpring(100);
        translateY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={[styles.square, rStyle]}></Animated.View>
    </PanGestureHandler>
  );
};

export default GenresMenu;

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "rgba(0, 0, 256, 0.5)",
    borderRadius: 20,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
